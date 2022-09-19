import re, requests
from turtle import title
from selenium import webdriver
from selenium.webdriver.common.by import By
import json

"""
requests에 header를 잘 넣어야지 크롤링이 되는 경우가 있어요.
- 검사 - network - doc - headers 에 있는 걸 잘 봐야

"""
# 파이썬 딕셔너리를 JSON 파일('[musical/concert]Top50')로 전환하여 저장
def toJson(dict, filename):
    with open('{filename}.json'.format(filename=filename), 'w', encoding='utf-8') as file:
        json.dump(dict, file, ensure_ascii=False, indent='\t')

# selenium driver
options = webdriver.ChromeOptions()
options.add_experimental_option("excludeSwitches", ["enable-logging"])
driver = webdriver.Chrome('crawling\chromedriver.exe', options=options)
driver.implicitly_wait(10) 

# requests
response = requests.get('http://www.playdb.co.kr/artistdb/list.asp?code=013003')
targetHTML = response.text
targetHTML = targetHTML.replace('\r\n', ' ').replace('\t', ' ').replace('\n', ' ')
ManNos = re.findall('.\/detail\.asp\?ManNo\=(\d+)\&part\=013003', targetHTML)
ManNos = list(dict.fromkeys(ManNos)) # 중복 제거, 순서 유지


dict = {}
for ManNo in ManNos:
    dict[ManNo] = {}
    # <이름> 저장
    name = re.findall('<td><a href\=\"\.\/detail\.asp\?ManNo\={No}\&part\=013003\" target\=\"\_top\">(.*?)<\/a><br>'.format(No=ManNo), targetHTML) 
    dict[ManNo]['name'] = name[0]
    # <출연 작품 - 제목> 저장 (배열)
    url = 'http://www.playdb.co.kr/artistdb/detail.asp?ManNo={No}&part=013003'.format(No=ManNo)
    
    pageHtml = requests.get(url).text
    pageHtml = pageHtml.replace('\r\n', ' ').replace('\t', ' ').replace('\n', ' ')
    
    dict[ManNo]['history'] = {}
    titles = re.findall('<td class\=\"ptitle\"><a href\=\"http\:\/\/www\.playdb\.co\.kr\/playdb\/playdbDetail\.asp\?sReqPlayno=(\d+)\">(.*?)<\/a><\/td>', pageHtml)

    for title in titles:
        dict[ManNo]['history'][title[0]] = {}
        dict[ManNo]['history'][title[0]]['title'] = title[1]

    # <썸네일 이미지 url> 저장
    thumbnailUrl = re.findall('<img id="manImage" src="(.*?)"', pageHtml)
    dict[ManNo]['thumbnailUrl'] = thumbnailUrl

toJson(dict, 'musicalArtists')

    
    




