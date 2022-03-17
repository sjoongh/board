# board

## 1. 기술스택

- vanilla javascript `필수`
- typescript `선택`
- bundler `필수`
    - `webpack` or `vite` or `rollup` or `parcel`중 택 1
- backend `필수`
    - `node.js`
    - `express.js` or `nest.js`중 택 1
- test `선택`
    - unit: `jest`
    - e2e: `cypress`, `supertest`

---

## 2. 기능 요구사항

* 인증(로그인) 기능은 **불필요**합니다.

### (1) 게시글 목록

- `글번호 / 제목 / 작성자 / 작성일` 등의 정보를 볼 수 있다
- 하단에 작성 버튼을 클릭하면, 게시글 작성 페이지로 이동한다
- 게시물을 검색할 수 있다.
- 작성일을 기준으로 내림차순/오름차순 정렬이 가능하다.
- 작성자를 클릭했을 때, 작성자가 작성한 게시물만 조회할 수 있다.
- 초기화 버튼이 존재하며, 해당 버튼을 클릭할 경우 정렬/검색 등이 초기화된다.
- 게시물 페이지네이션이 가능하며, 한 페이지에 볼 수 있는 게시물의 갯수를 선택하거나 입력하는 영역이 존재한다.
    - ex) 5개 보기 / 10개 보기 / 30개 보기 / 50개 보기 / 100개 보기
- `새로고침 버튼`이 존재하며, 해당 버튼을 클릭시 데이터를 갱신한다.
    - 이 때 캐시된 데이터를 갱신한다.

### (2) 게시글 조회

- `글번호 / 제목 / 내용 / 작성자 / 작성일` 등의 정보를 볼 수 있다.
- `수정 / 삭제 / 목록` **버튼** 이 존재한다.
- `수정`을 **클릭**시 수정 페이지로 이동한다.
    - 수정 페이지로 이동하는 경우, 해당 게시글의 내용이 기본적으로 입력된 상태로 보여져야 한다.
- `삭제`를 **클릭**시 게시글이 삭제된다.
- `목록`을 **클릭**시 목록 버튼으로 이동한다.
- 404 페이지
    - 없는 게시물을 조회할 경우에 대한 페이지(혹은 UI)를 만든다.

### (3) 게시글 작성/수정

- `제목 / 내용 / 작성자` 등을 입력할 수 있는 input이 있다.
- input을 채운 후 `전송 버튼`을 클릭할 경우 게시물이 작성(수정) 된다.
- 게시글 작성이 완료되면 자동으로 해당 게시물을 조회하는 페이지로 이동한다.

### (4) API 오류 관련

- 4XX, 5XX status에 대한 응답이 내려올 경우에 대한 UI 처리가 존재한다.
    - 없는 페이지로 접근할 경우 404 페이지를 만들고
    - 500 관련 에러가 발생할 경우, 에러에 대한 메세지를 띄워준다.
        - alert로 해도 좋고
        - 경고창 관련 UI를 만들면 더 좋다

---

## 3. 기술 요구사항

### (1) Front-End

- **구현에 필요한 프레임워크 및 라이브러리 절대 사용 금지**
- **typescript + webpack + babel**를 이용하여 개발환경 구축하기
    - 프론트엔트 코드를 webpack으로 build하여 production code 생성하기
    - build된 code를 server에 연동하여 사용할 것
- 컴포넌트 기반 설계
    - **본인이 직접 할 것. 타인의 코드 사용 금지. 타인의 코드를 사용할 경우 배점 없음.**
    - 상태(State)를 기반으로 렌더링하는 형태로 작성할 것
    - 설계는 자신 있는 형태(객체지향 or 함수지향)로 해주세요!
    - `Observer Pattern`을 이용해서 상태가 변경될 때 자동으로 렌더링 되도록 만들어보기
    
    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9a221e77-d41d-4aea-bff3-dbb93de0b485/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9a221e77-d41d-4aea-bff3-dbb93de0b485/Untitled.png)
    
- SPA(Single Page Application)기반
    - Router 만들어서 사용해보기
        - **페이지간에 이동이 발생할 때 새로고침이 발생하지 않도록 한다.**
        - 새로고침을 했을 경우에도 현재 페이지의 내용을 유지해야 한다.
        - 위의 기능들은 빌드 후에 서버에서 붙였을 때에 정상적으로 작동해야 한다. 그렇지 않을 경우 배점 없음.
- 전역 상태관리를 위한 Store 만들기
    - Vuex, Redux, Mobx, Recoil 등과 같은 상태관리 라이브러리를 **직접 만들어서 사용해보기**
- 이벤트 관리를 최적화하기
    - 불필요한 이벤트는 해제하기
    - [이벤트 위임](https://ko.javascript.info/event-delegation) 사용하기
- XHR(ajax) 관련
    - **fetch 사용**
    - API **요청중(loading)/실패(fail)** 등에 대한 UI 처리
- 렌더링 최적화 - 필요한 부분만 렌더링
    - **가상돔 혹은 DIFF 알고리즘을 이용**
    - 참고아티클
        - [Proxy와 가상 돔을 사용하여 나만의 프레임워크 만들기](https://meetup.toast.com/posts/158)
        - [가상돔 직접 만들기 (1)](https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060)
        - [가상돔 직접 만들기 (2)](https://medium.com/@deathmood/write-your-virtual-dom-2-props-events-a957608f5c76)
- API 캐싱
    - GET Method로 보내는 요청의 경우 캐싱하여 재요청 하지 않도록 한다.
        - localstorage를 이용해도 좋고, 단순하게 로컬 변수를 이용해도 무관함
        - ex) 게시물 조회, 페이징 등
    - POST, DELETE, PUT 과 관련된 Method로 요청을 보낼 경우, 캐싱된 데이터를 갱신함
        - ex) 게시물 추가/수정/삭제 등
- style에 대해선 따로 평가하지 않을 예정입니다.

### (2) Back-end

- 게시물에 대한 CRUD(create, read, update, delete) Endpoint 작성
- API에 대한 캐싱 적용
    - read할 경우 캐싱된 데이터만 반환한다.
    - create, update, delete 관련 로직을 수행하면 캐싱을 초기화한다.
- Typescript 사용
    - 서버와 클라이언트가 주고받는 데이터에 대한  Type을 만들어서 사용할 것
    (즉, 서버와 클라이언트가 Request/Response type을 공유하도록 만들 것)
- DB는 사용하지 않아도 됨
    - 예시1) 간단하게 data.json 파일을 하나 만들어서 관리함
        
        ```jsx
        function getData() {/* JSON 파일을 읽어옴 */ }
        function setData(data) {/* JSON 파일을 저장함 */ }
        
        app.post("/api/post", (req, res) => {
          const posts = getData();
          posts.push(req.body);
          setData(posts);
          res.send();
        });
        
        app.get("/api/post", (req, res) => {
          res.send(getData());
        })
        
        /** 구현 코드 **/
        app.listen();
        ```
        
    - 예시2) 로컬 변수로만 관리함
        
        ```jsx
        const posts = [];
        
        app.post("/api/post", (req, res) => {
          posts.push(req.body);
          res.send();
        });
        
        app.get("/api/post", (req, res) => {
          res.send(posts);
        })
        
        /** 구현 코드 **/
        app.listen();
        ```
        

## (3) 테스트 코드

- **테스트 작성 또한 선택입니다.**
- 프론트엔드
    - e2e test
        - [cypress](https://www.cypress.io/) 등의 도구를 활용하여 기능 요구사항에 대한 테스트 진행
        - 테스트만 돌려도 기능이 구현 되었는지 확인할 수 있으면 좋음
    - unit test
        - 자유롭게 작성해볼 것
        - test coverage를 기준으로 평가할예정
- 백엔드
    - e2e test
        - [supertest](https://www.npmjs.com/package/supertest) 등을 활용하여 endpoint에 대한 테스트 진행
    - unit test
        - 자유롭게 작성해볼 것
        - test coverage를 기준으로 평가할예정
