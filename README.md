# jscrossdomain

# 설명 
JavaScript for Padding(JSONP)를 이용하며 Cross-Domain 호출 예제 

기본 domain은 app 폴더에 있는 내용이며 app/templates/index.html 에 기본적인 jQeury 기반 ajax 코드 있음.
다른 domain은 otherdomain에 있는 내용으로 정적인 json을 돌려주는 구조임 
기본적인 코드는 python으로 작성되어 있으며, Flask package를 사용해서 구성 됨 

app/static/script.js 에서 cross-domain 호출시 ip 주소를 변경해줘야 함 


# 사용하기 
우선 해당 repo를 clone을 통해서 내려 받고 (git clone https://github.com/javaos74/jscrossdomain) 
기본 domain에서 run.py를 실행함 (8088 port로 접속 가능)
'''python
#python run.py 
''' 

이후에 다른 ip에서 otherdomain에 있는 app.py를 실행(5500 port로 접속 가능) 
'''python
#python app.py
''''

기본 domain에서 app/static/script.js 파일에서 내용을 otherdomain ip주소만 수정함 



