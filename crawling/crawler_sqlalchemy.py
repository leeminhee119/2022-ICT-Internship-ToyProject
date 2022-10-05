import re, requests
from tracemalloc import start
import json
import sqlalchemy as db
import pymysql
from datetime import datetime

pymysql.install_as_MySQLdb() # mysql db와의 호환 위한 함수 호출
db_name = 'mucon_db'
db_id = 'root'
db_ip = 'localhost' # 자신의 로컬컴퓨터
db_password = '077100Lee!w'
db_port = '3306'

# mysql db url따라 엔진 생성
engine = db.create_engine("mysql+mysqldb://" + db_id + ":" + db_password + "@"
                        + db_ip + ":" + db_port + "/" + db_name, encoding='utf-8')

connection = engine.connect()
metadata = db.MetaData()
# 연결된 db의 테이블 가져오기
table_artists = db.Table('artists', metadata, autoload=True, autoload_with=engine)
table_products = db.Table('products', metadata, autoload=True, autoload_with=engine)
table_artists_products = db.Table('artists_products', metadata, autoload=True, autoload_with=engine)

"""
requests에 header를 잘 넣어야지 크롤링이 되는 경우가 있어요.
- 검사 - network - doc - headers 에 있는 걸 잘 봐야

"""
# 파이썬 딕셔너리를 JSON 파일('[musical/concert]Top50')로 전환하여 저장
def toJson(dict, filename):
    with open('{filename}.json'.format(filename=filename), 'w', encoding='utf-8') as file:
        json.dump(dict, file, ensure_ascii=False, indent='\t')

def getArtists():
    for code_type in ['013001', '013003']:
        response = requests.get('http://www.playdb.co.kr/artistdb/list.asp?code={code}'.format(code=code_type)) # 배우 리스트 페이지
        artistsHTML = response.text
        artistsHTML = artistsHTML.replace('\r\n', ' ').replace('\t', ' ').replace('\n', ' ')
        ManNOs = re.findall('.\/detail\.asp\?ManNo\=(\d+)\&part\={code}'.format(code=code_type), artistsHTML)
        ManNOs = list(dict.fromkeys(ManNOs)) # 중복 제거, 순서 유지
        names = re.findall('<td><a href\=\"\.\/detail\.asp\?ManNo\=(\d+)\&part\=(\d+)\" target\=\"\_top\">(.*?)<\/a><br>', artistsHTML)
        for i in range(len(ManNOs)):
            # name 저장
            name = names[i][-1]
            url = 'http://www.playdb.co.kr/artistdb/detail.asp?ManNo={No}&part={code}'.format(No=ManNOs[i], code=code_type) #배우 상세페이지
            pageHtml = requests.get(url).text
            pageHtml = pageHtml.replace('\r\n', ' ').replace('\t', ' ').replace('\n', ' ')
            a_thumbnail_url = re.findall('<img id\=\"manImage\" src\=\"(.*?)\"', pageHtml)[0]
            
            # 연결된 db 테이블에 저장 - artists 테이블
            query = db.insert(table_artists).prefix_with("IGNORE").values(name=name, thumbnail_url=a_thumbnail_url)
            result_proxy = connection.execute(query)
            artist_id = result_proxy.lastrowid
            result_proxy.close()

            ####
            # 배우별 작품 상세정보 products 테이블에 저장
            ####
            url = 'http://www.playdb.co.kr/artistdb/detail.asp?ManNo={No}&part={code}'.format(No=ManNOs[i], code=code_type)
            
            pageHtml = requests.get(url).text
            pageHtml = pageHtml.replace('\r\n', ' ').replace('\t', ' ').replace('\n', ' ')
            
            # 출연작품 코드 배열 저장
            prdCodes = re.findall('<a href\=\"http\:\/\/www\.playdb\.co\.kr\/playdb\/playdbDetail\.asp\?sReqPlayno\=(\d+)\"><img',pageHtml)
            
            # 작품 상세 정보 products 및 artists_products 에 저장
            for i in range(len(prdCodes)):
                prdDetailHTML = requests.get('http://www.playdb.co.kr/playdb/playdbDetail.asp?sReqPlayno={code}'.format(code=prdCodes[i])).text
                # code, title
                # code = int(re.findall("http\:\/\/ticket\.interpark\.com\/Ticket\/Goods\/GoodsInfo\.asp\?GoodsCode\=(\d+)\&", prdDetailHTML)[0])
                title = re.findall('<span class\=\"title\">(.*?)<\/span>', prdDetailHTML)[0]
                # type
                kor_type = re.findall('<td class\=\"title\">(.*?) 예매 랭킹<\/td>', prdDetailHTML)[0]
                if kor_type == '뮤지컬':
                    type = 'musical'
                elif kor_type == '콘서트':
                    type = 'concert'
                else:
                    continue #뮤지컬도 아니고 콘서트도 아닌 장르는 저장하지 않음
                #thumbnail_url, reservation_url
                p_thumbnail_url = re.findall('<h2><img src\=\"(.*?)\" onError\=', prdDetailHTML)[0]
                reservation_url = None
                if '예매하기' in prdDetailHTML:
                    reservation_url = re.findall('<p><a href\=\"(.*?)\" target\=\"\_blank\">',prdDetailHTML)[0]
                # start_date, end_date
                duration = re.findall('<td class="">(.*?) ~ (.*?) <\/td>', prdDetailHTML)
                temp_date = duration[0][0].replace('/', '')
                start_date = datetime.strptime(temp_date, '%Y%m%d')
                temp_date = duration[0][1].replace('/', '')
                end_date = datetime.strptime(temp_date, '%Y%m%d')

                # 연결된 db 테이블에 저장 - products, artist_products 각각
                
                query_products = db.insert(table_products).prefix_with("IGNORE").values(title=title, type=type,
                thumbnail_url=p_thumbnail_url, reservation_url=reservation_url, start_date=start_date, end_date=end_date)
                result_proxy = connection.execute(query_products)
                product_id = result_proxy.lastrowid
                query_artists_products = db.insert(table_artists_products).prefix_with("IGNORE").values(artist_id=artist_id, product_id=product_id)
                result_proxy = connection.execute(query_artists_products)
                result_proxy.close()


                

def getTopProducts():
    # 인터파크 랭킹 페이지 크롤러
    for code in ['01003', '01011']:
        response = requests.get('https://ticket.interpark.com/contents/Ranking/RankList?pType=D&pKind={code}'.format(code=code))
        rankingHTML = response.text
        rankingHTML = rankingHTML.replace('\r\n', ' ').replace('\t', ' ').replace('\n', ' ')
        # id 배열
        ProductNOs = re.findall('<a href\=\"javascript\:\;\" onclick\=\"Go\(\'(\d+)\'\, \'Y\'\, \'\'\)\; \">', rankingHTML)
        # 썸네일url 배열
        prdThumbnails = re.findall('class\=\"prdImg\"><img src\=\"(.*?)\"', rankingHTML)
        for i in range(len(ProductNOs)):

            # get 공연시작일, 종료일 from api
            jsonData = requests.get('https://api-ticketfront.interpark.com/v1/goods/{id}/summary?goodsCode={id}&priceGrade=&seatGrade='.format(id=ProductNOs[i])).json()
            start_date = datetime.strptime(jsonData['data']['playStartDate'], '%Y%m%d')
            end_date = datetime.strptime(jsonData['data']['playEndDate'], '%Y%m%d')
            
            title = jsonData['data']['goodsName']
            # type = jsonData['data']['genreCode'] # musical: 01011, concert: 01003
            type = 'concert'
            if code == '01011':
                type = 'musical'
            ranking = int(jsonData['data']['dayRank'])
            p_thumbnail_url = prdThumbnails[i]
            reservation_url = 'https://tickets.interpark.com/goods/{code}'.format(code=ProductNOs[i])

            # 연결된 db 테이블에 저장
            query = db.insert(table_products).prefix_with("IGNORE").values(code=ProductNOs[i], title=title, type=type, ranking=ranking,
            thumbnail_url=p_thumbnail_url, reservation_url=reservation_url, start_date=start_date, end_date=end_date)
            result_proxy = connection.execute(query)
            result_proxy.close()
    
    # PLAY DB 배우별 출연작품 상세페이지 크롤러



getArtists()
getTopProducts()