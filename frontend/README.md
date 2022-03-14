## README Plz!
project start

1. 기존 :  pakcage.json(nodemon config add 되어있음) --> node읽고 back server start(3000)
--> cmd에서 dist에 build된 frontend html, js file load(index.html이 root) -->  front server start(8000)

2. 변형 : frontend start --> webpack(front, 8000)
backend(nodemon) start --> server.js(3000)


--> result : 둘 다 두가지의 포트를 열어서 사용하는건 같다.
--> 차이점 : webpack 설정이 frontend와 backend에 두는 것이 다르고 
--> 1. 방식은 정확한 분리가 되어있지 않음
--> 2. 방식은 백과 프론트의 영역 분리가 명확함