import requests, re
session = requests.session()
url = "https://www.mrblue.com/login?returnUrl=%2F"


response = session.get(url)
targetHTML = response.text
targetHTML = targetHTML.replace('\r\n', ' ').replace('\t', ' ').replace('\n', ' ')



token = re.findall('<input name\=\_\_RequestVerificationToken type\=hidden value\=(.*?)><\/form>', targetHTML)
print(token[0])

data = {
    'returnUrl':'/',
    'isKeep':'',
    'email':'mh.lee@webtoonguide.com',
    'password':'077100Lee!w',
    '__RequestVerificationToken': token[0],
}
request_headers = {
    'Referer' : 'https://www.mrblue.com/login?returnUrl=/',
    'User-Agent' : ('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36')
}

# loginForm = re.findall('<input type\=\"text\" name\=\"email\" id\=\"pu\-page\-id\" title\=\"아이디\">', targetHTML)
session.post(url, data=data, headers=request_headers)

# 로그인 성공 여부 확인
response = session.get('https://www.mrblue.com')
success = response.text.find('내정보')
print(success)

"""

"""

# import requests, re
# url = "https://www.mrblue.com/login?returnUrl=%2F"

# with requests.Session() as s:
#     response = s.get(url)
#     targetHTML = response.text
#     targetHTML = targetHTML.replace('\r\n', ' ').replace('\t', ' ').replace('\n', ' ')

#     token = re.findall('<input name\=\_\_RequestVerificationToken type\=hidden value\=(.*?)><\/form>', targetHTML)
#     print(token[0])
#     data = {
#         'returnUrl':'/',
#         'isKeep':'',
#         'email':'mh.lee@webtoonguide.com',
#         'password':'077100Lee!w',
#         '__RequestVerificationToken': token[0],
#     }
#     request_headers = {
#         'Referer' : 'https://www.mrblue.com/login?returnUrl=/',
#         'User-Agent' : ('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36')
#     }

#     # loginForm = re.findall('<input type\=\"text\" name\=\"email\" id\=\"pu\-page\-id\" title\=\"아이디\">', targetHTML)
#     s.post(url, data=data, headers=request_headers)

#     # 로그인 성공 여부 확인
#     response = s.get('https://www.mrblue.com')
#     success = response.text.find('내정보')
#     print(success)

