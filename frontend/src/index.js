import Main from './page/Main.js';

const app = document.getElementById('app');
new Main(app);

// HMR(Hot Modual Replacement) : HMR은 내용이 변경된 모듈을 페이지 새로고침 없이 런타임에서 업데이트합니다. 업데이트에 실패할 경우 새로고침을 수행.
// 변경된 모듈을 hot modual이라고 한다.
// webpack-dev-server 4.0부터 HMR이 기본적으로 활성화 되어있다.
if (hot.module) {
    hot.module.accept('./index.js', () => {
    renderApp = require('./index.js');
  });
}