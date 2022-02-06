import ajax from '../js/ajax.js';
import AbstractView from './AbstractView';
import { navigateTo } from '../js/router.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('DetailPage');
    }

    async getHtml() {
        return `
        <div class="${style.title_wrap}">
            <h1 class="${style.title}"><span></span></h1>
            <span class="${style.create_date}"></span>
        </div>
        <div class="${style.content_wrap}">
            <article class="${style.content}"></article>
            <div class="${style.btnbox}">
                <div class="${style.right_box}">
                    <button type ="button" class="update_btn ${style.btn}" data-value="update">수정</button>
                    <button type ="button" class="${style.delete_btn} ${style.btn}" data-value="delete">삭제</button>
                </div>
            </div>
        </div>
        <div class="${style.comment_wrap}">
            <ol class="${style.comment_list}">
            </ol>
        </div>
        <div class="${style.comment_write_wrap}">
            <form method="post" action="/board/:no/comment">
                <input type="password" name="password" class="${style.comment_write_password}" placeholder="비밀번호">
                <div class="${style.comment_write_content_wrap}">
                    <textarea name="content" class="${style.comment_write_content}" placeholder="댓글 작성"></textarea>
                    <button type="submit" class="comment_submit_btn ${style.btn}">등록</button>
                </div>
            </form>
        </div>`
    }

    async getBoardDetail() {
        // set board data
        const data = JSON.parse(await ajax('GET', `${this.url}/board/${this.params.no}`));
        const titleWrap = document.querySelector(`.${style.title_wrap}`);
        const title = document.querySelector(`.${style.title}`).firstChild;
        const titleText = document.createTextNode(`${data.board.title}`);
        title.appendChild(titleText);

        const createDate = document.querySelector(`.${style.create_date}`);
        const date = this.converDate(new Date(data.board.createDate));
        const dateText = document.createTextNode(date);
        createDate.appendChild(dateText);
        titleWrap.appendChild(createDate);

        const content = document.querySelector(`.${style.content}`);
        // u00A0 --> 줄바꿈을 하지 않는 빈 칸
        const contentText = data.board.content.replaceAll(' ', '\u00A0').split('\n');

        for (const line of contentText) {
            content.appendChild(document.createTextNode(`${line}`));
            content.appendChild(document.createTextNode('br'));
        }

        // set board data
        const commentList = document.querySelector(`.${style.comment_list}`);

        for (const comment of data.board.Comments) {
            const li = document.createElement('li');
            const span = document.createElement('span');
            const commentContent = document.createTextNode(comment.content);
            const btn = document.createElement('button');
            const btnText = document.createTextNode('X');
        }
    }

    attachEvent() {
        // board events
        const modalWrap = document.querySelector(`${style.modal_wrap}`);
        let target;

        document.querySelectorAll(`.${style.right_box} .${style.btn}`).forEach(btn => {
            btn.addEventListener('click', e => {
                target = e.target;
                modalWrap.classList.remove(`${style.visual_hidden}`);
            });
        });

        document.querySelector(`.modal_cancle_btn`).addEventListener('click', () => {
            document.querySelector(`.${style.modal_password}`).value = '';
            modalWrap.classList.add(`${style.visual_hidden}`);
        });

        document.querySelector(`${style.btn_area} .modal_submit_btn`).addEventListener('click', e => {
            e.preventDefault();
            const element = document.querySelector(`.${style.modal_password}`);
            const pwd = parseInt(element.value);
            const result = JSON.parse(await ajax('POST', `${this.url}/board/${this.params.no}/auth`));
            element.value = '';
            if (result === 'Y')
                if (target.getAttribute('data-value') === 'update')
                navigateTo(`/update/${this.params.no}`);
        })
    }
}