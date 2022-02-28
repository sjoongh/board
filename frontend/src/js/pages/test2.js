function h(type, props, ...children) {};
function createElement(node) {};
function updateElement(parent, newNode, oldNode) {};

const oldState = [
    { id: 1, completed: false, content: 'todo list1'},
    { id: 2, completed: true, content: 'todo list2'},
];

const newState = [
    { id: 1, completed: false, content: 'todo list1'},
    { id: 2, completed: true, content: 'todo list2 update'},   
];

const render = (state) => (
    <div id ="app">
        <ul>
            { state.map(({ completed, content }) => (
                <li class={completed ? 'completed' : null}>
                    <input type="checkbox" class="toggle" checked={completed} />
                    { content }
                    <button class="button">삭제</button>
                </li>
            )) }
        </ul>
        <form>
            <input type="text" />
            <button type="submit">추가</button>
        </form>
    </div>
);

const oladNode = render(oldState);
const newNode = render(newState);

const $root = document.createElement('div');

document.body.appendChild($root);
updateElement($root, oldNode);
setTimeout(() => 
    updateElement($root, newNode, oldNode),
    1000
);

// 변경 전 노드
// 변경 노드
// text가 같다면??
// 태그 가 같다면??
// 위의 순서 검증 후 비교

function updateElement (parent, newNode, lodNode, index=0) {
    if (!newNode && oldNode) {}

    if (newNode && !oldNode) {}

    if (typeof newNode === "string" && typeof oldNode === "string") {}

    if (newNode.type != oldNode.type) {}

    updateAttributes(
        parent.childNode[index],
        newNode.props,
        oldNode.props
    );
    // 위 함수를 반복하여 모든 자식태그를 순회
}

// 변경 부분만 반영
function updateAttributes(target, newProps, oldProps) {}

