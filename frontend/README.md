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


프론트엔드에서 webpack으로 개발환경을 구성한 다음에, 프로젝트를 서비스할 때는 webpack으로 구성된 모듈을 build된 static 파일들(html/css/js)를 server에 붙여야합니다.

개발을 위한 설정

서비스를 위한 설정
```
const content = await fetch(`${this._url}/api/best`).then(resp => resp.json());
        let ul = `
        <h3 class='top12_title'>실시간 TOP 12</h3>
        <div>
            <ul>
        `;

        for (let i=0; i<=11; i++) {
            ul += `
                <li>
                    <div class='post-idx post-link' data-idx='${content[i].idx}'>
                        <span class='post-link'>${i+1}</span>
                        <span class='sub_title post-link'>${content[i].title}</span>
                        <span class='sub_content post-link'>${content[i].mediaName}</span>
                    </div>
                </li>
            `;
        }
        ul += '</ul></div>';
        return ul;
```
위의 코드 수정
```
const content = await fetch(`${this._url}/api/best`).then(resp => resp.json());
return  `
  <h3 class='top12_title'>실시간 TOP 12</h3>
  <div>
      <ul>
        ${content.map(({ idx, title, mediaName }, key) => `
          <li>
              <div class='post-idx post-link' data-idx='${idx}'>
                  <span class='post-link'>${key}</span>
                  <span class='sub_title post-link'>${title}</span>
                  <span class='sub_content post-link'>${mediaName}</span>
              </div>
          </li>
        `).join('')}
      </ul>
  </div>
`;
```
일단 이렇게 표현할 수 있습니다.
for 사용은 꼭 필요한 경우가 아니라면 최대한 자제해주세요.
앞으로도 설계하실 때 for은 그냥 없는 문법이라고 생각하시는게 좋을 것 같습니다.

그리고 template에서 api를 호출하고 있는데.. 이렇게 사용하는게 아니라
mounted 시점이나 혹은 특정 event가 발생 했을 때 api로 데이터를 가져오고,
해당 데이터를 setState로 값을 할당하고,
setState가 실행될 때 변경된 state를 기반으로 다시 render를 실행해줘야합니다.
지금과 같은 코드의 경우 render를 할 때 마다 api를 호출하기 때문에 무척 비효율적이랍니다!

class 이름은 PascalCase로 사용해주세요!

localStorage를 날것 그대로 사용하기보단, 한 층 추상화해서 인코딩/디코딩 과정을 감춰주면 좋았을 것 같아요!
이렇게 사용하는거죠

// 선언부: favoriteRepository.js
export const favoriteRepository = new Repository("favorite");

// 사용부
const favorite = favoriteRepository.get();

puppeteer의 경우 브라우저를 띄워서 파싱 작업을 하는데 브라우저를 정교하게 컨트롤 하여 데이터를 가져오는 상황이 아니라면 chreeio와 axios를 이용해서 단순하게 HTML Text만 파싱해도 충분합니다.

 service layer로 분리해주면 어떨까요?
보통 서버에서는 MVC Pattern을 많이 사용하는데,
Controller는 Service에 대부분의 로직을 위임하고 단순하게 request와 response만 handling 합니다.
