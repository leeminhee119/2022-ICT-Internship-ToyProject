from argparse import Action
from selenium import webdriver
from selenium.webdriver.common.by import By
from datetime import datetime


import json 



# 파이썬 딕셔너리를 JSON 파일('[musical/concert]Top50')로 전환하여 저장
def toJson(dict, type):
    with open('{type}.json'.format(type=type), 'w', encoding='utf-8') as file:
        json.dump(dict, file, ensure_ascii=False, indent='\t')

options = webdriver.ChromeOptions()
options.add_experimental_option("excludeSwitches", ["enable-logging"])
driver = webdriver.Chrome('crawling\chromedriver.exe', options=options)
driver.implicitly_wait(10) 

def crawl_topranking(type):
    if type == 'musicalRank':
        urlCode = '01011'
    else:
        urlCode = '01003'
    today = datetime.today().strftime('%Y%m%d')
    url = "https://ticket.interpark.com/contents/Ranking/RankList?pKind={code}&pCate=&pType=D&pDate={date}".format(code=urlCode, date=today) #일간 랭킹 페이지
    driver.get(url)
    prdNo = [i for i in range(1, 51)]
    prdTitles = driver.find_elements(By.CSS_SELECTOR, 'div.prdInfo a b')
    prdImages = driver.find_elements(By.CSS_SELECTOR, 'a.prdImg img')
    # prdUrl = driver.find_element(By.CSS_SELECTOR, 'div.prdInfo a') ---- 해당 작품 상세 예매 페이지 URL 가져오려 하는데, href에 url이 아니라 자바스크립트 함수로 작성됨.
    dict = {}
    for i in range(50):
        dict[str(prdNo[i])] = {'title':prdTitles[i].text, 'imgsrc':prdImages[i].get_attribute('src')}
    toJson(dict, type)

def crawl_artists(type):
    if type == 'musicalArtists':
        urlCode = '013003'
    else:
        urlCode = '013001'
    url = "http://www.playdb.co.kr/artistdb/list.asp?code={code}".format(code=urlCode) #일간 랭킹 페이지
    driver.get(url)

    artistNames = driver.find_elements(By.XPATH, '//td/table/tbody/tr/td[1]/table/tbody/tr/td[2]/a')
    artistImages = driver.find_elements(By.XPATH, '//td/table/tbody/tr/td[1]/table/tbody/tr/td[1]/a/img')


    dict = {}
    for i in range(len(artistNames)):
        print('시작')
        name = artistNames[i].text
        dict[name] = {}
        dict[name]['name'] = name
        dict[name]['imgsrc'] = artistImages[i].get_attribute('src')
        print('배우 크롤링 완료')
        artistNames[i].click()
        
        prdTitles = driver.find_elements(By.CSS_SELECTOR, 'td.ptitle a') # 작품 제목 텍스트
        prdImages = driver.find_elements(By.CSS_SELECTOR, 'img.img_size4') # 작품 이미지 
        print('배우 출연 작품 목록 크롤링 완료')

        dict[name]['prds'] = {}
        for j in range(len(prdTitles)):
            dict[name]['prds']['title'] = prdTitles[j].text
            dict[name]['prds']['imgsrc'] = prdImages[j].get_attribute('src')
        driver.find_element(By.XPATH, '//*[@id="wrap"]/div[2]/a[3]').click()

    toJson(dict, type)

crawl_topranking('musicalRank')
crawl_topranking('concertRank')
crawl_artists('musicalArtists')
crawl_artists('concertArtists')


driver.close()
