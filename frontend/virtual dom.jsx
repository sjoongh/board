function h(type, props, ...children) {
    return { type, props, children };
}

function createElement(node) {
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }
    const $el = document.createElement(node.type);
    node.children
        .map(createElement)
        .forEach($el.appendChild.bind($el));
    return $el;
}

const test = (
    <ul class="list">
        <li>item1</li>
        <li>item2</li>
    </ul>
);

// root id가져와서 appendchild
// replaceChild
// removeChild
const $root = document.getElementById('root');
$root.appendChild(createElement(a));

console.log(test);

