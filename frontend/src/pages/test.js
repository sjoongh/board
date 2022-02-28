function h(type, props, ...children) { // children 전개
    return { type, props, children: children.flat() };
}

function createElement(node) {
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }
    Object.entries(node.props || {})
        .filter(([attr, value]) => value) // ??
        .forEach(([attr, value]) => (
            $el.setAttribute(attr, value)
        ));
    const $el = document.createElement(node.type);
    node.children.map(createElement)
            .forEach(child => $el.appendChild(child));

    return $el;
}

// state에 json파일을 받아오고 state로 관리하는데 virtual dom이 변경된다면 -> 1. json파일도 변경
// 2. 변경 x라면 json파일 냅둠
const state = [
    {id: 1, completed: false, content: 'todo list item 1'},
    {id: 2, completed: true, content: 'todo list item 2'},
];

const realDom = createElement(
    <div id="app">
        <ul>
            { state.map(({ completed, content }) => (
                <li>
                <input type="checkbox" class="toggle" checked={completed} />
                { content }
                <button class="remove">삭제</button>
                </li>
            )) }
        </ul>
        <form>
            <input type="text" />
            <button type="submit">추가</button>
        </form>
    </div>
);

console.log(realDom);

