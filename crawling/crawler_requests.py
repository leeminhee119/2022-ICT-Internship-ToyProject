import re, requests
import json

"""
requests에 header를 잘 넣어야지 크롤링이 되는 경우가 있어요.
- 검사 - network - doc - headers 에 있는 걸 잘 봐야

"""
# 파이썬 딕셔너리를 JSON 파일('[musical/concert]Top50')로 전환하여 저장
def toJson(dict, filename):
    with open('{filename}.json'.format(filename=filename), 'w', encoding='utf-8') as file:
        json.dump(dict, file, ensure_ascii=False, indent='\t')

def getArtists(type):
    dict = {}
    code = '013001'
    if type=='musical':
        code = '013003'

    response = requests.get('http://www.playdb.co.kr/artistdb/list.asp?code={code}'.format(code=code))
    artistsHTML = response.text
    artistsHTML = artistsHTML.replace('\r\n', ' ').replace('\t', ' ').replace('\n', ' ')
    ManNOs = re.findall('.\/detail\.asp\?ManNo\=(\d+)\&part\={code}'.format(code=code), artistsHTML)
    ManNOs = list(dict.fromkeys(ManNOs)) # 중복 제거, 순서 유지
    for ManNo in ManNOs:
        dict[ManNo] = {}
        # <이름> 저장
        name = re.findall('<td><a href\=\"\.\/detail\.asp\?ManNo\={No}\&part\={code}\" target\=\"\_top\">(.*?)<\/a><br>'.format(No=ManNo, code=code), artistsHTML) 
        dict[ManNo]['name'] = name[0]
        # <출연 작품 - 제목> 저장 (배열)
        url = 'http://www.playdb.co.kr/artistdb/detail.asp?ManNo={No}&part={code}'.format(No=ManNo, code=code)
        
        pageHtml = requests.get(url).text
        pageHtml = pageHtml.replace('\r\n', ' ').replace('\t', ' ').replace('\n', ' ')
        
        dict[ManNo]['history'] = {}
        prdCodes = re.findall('<a href\=\"http\:\/\/www\.playdb\.co\.kr\/playdb\/playdbDetail\.asp\?sReqPlayno\=(\d+)\"><img',pageHtml)
        
        # 작품 상세 정보 history에 저장
        for i in range(len(prdCodes)):
            prdDetailHTML = requests.get('http://www.playdb.co.kr/playdb/playdbDetail.asp?sReqPlayno={code}'.format(code=prdCodes[i])).text
            if '<h2><img src=' in prdDetailHTML and 'onError=' in prdDetailHTML:
                prdLink = re.findall('<p><a href\=\"(.*?)\" target\=\"\_blank\">',prdDetailHTML)
            prdTitle = re.findall('<span class\=\"title\">(.*?)<\/span>', prdDetailHTML)
            prdImage = re.findall('<h2><img src\=\"(.*?)\" onError\=', prdDetailHTML)
            print(prdLink)

            dict[ManNo]['history'][prdTitle[0]] = {}
            dict[ManNo]['history'][prdTitle[0]]['title'] = prdTitle[0]
            dict[ManNo]['history'][prdTitle[0]]['thumbnailUrl'] = prdImage[0]
            dict[ManNo]['history'][prdTitle[0]]['reservationHref'] = ''
            if prdLink != []:
                dict[ManNo]['history'][prdTitle[0]]['reservationHref'] = prdLink[0]
            

        # <썸네일 이미지 url> 저장
        thumbnailUrl = re.findall('<img id="manImage" src="(.*?)"', pageHtml)[0]
        dict[ManNo]['thumbnailUrl'] = thumbnailUrl
    toJson(dict, '{type}Artists'.format(type=type))

def getTopProducts(type):
    dict = {}
    code = '01003'
    if type=='musical':
        code = '01011'

    response = requests.get('https://ticket.interpark.com/contents/Ranking/RankList?pType=D&pKind={code}'.format(code=code))
    rankingHTML = response.text
    rankingHTML = rankingHTML.replace('\r\n', ' ').replace('\t', ' ').replace('\n', ' ')
    prdNOs = re.findall('<a href\=\"javascript\:\;\" onclick\=\"Go\(\'(\d+)\'\, \'Y\'\, \'\'\)\; \">', rankingHTML)
    prdThumbnail = re.findall('class\=\"prdImg\"><img src\=\"(.*?)\"', rankingHTML)
    for i in range(len(prdNOs)):

        jsonData = requests.get('https://api-ticketfront.interpark.com/v1/goods/{id}/summary?goodsCode={id}&priceGrade=&seatGrade='.format(id=prdNOs[i])).json()
        prdDuration = (jsonData['data']['playStartDate'], jsonData['data']['playEndDate'])

        dict[prdNOs[i]] = {}
        dict[prdNOs[i]]['title'] = jsonData['data']['goodsName']
        dict[prdNOs[i]]['thumbnailUrl'] = prdThumbnail[i]
        dict[prdNOs[i]]['duration'] = prdDuration
        dict[prdNOs[i]]['reservationHref'] = 'https://tickets.interpark.com/goods/{code}'.format(code=prdNOs[i])
    toJson(dict, '{type}Rank'.format(type=type))


getTopProducts('musical')
getTopProducts('concert')
getArtists('musical')
getArtists('concert')
    




