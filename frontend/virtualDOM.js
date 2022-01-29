function virtualDom(type, props, ...children) {
    return { type, props, children: children.flat() }
}

virtualDom('div', { id: 'app' },
    virtualDom('ul', null,
        virtualDom('li', null,
        'todo list item 1',
        virtualDom('button', { className: 'remove' }, '삭제')
    ),
    virtualDom('li', { className: 'compleated' },
        virtualDom('input', { type: 'checkbox', className: 'toggle', checked: true }),
        'todo list item 2',
        virtualDom('button', { className: 'remove' }, '삭제')
        ),
    ),
    virtualDom('form',
        virtualDom('input', { type: 'text' }),
        virtualDom('button', { type: 'submit' }, '추가'),
        )
    );


function h(type, props,  ...childred) {
    return { type, props, childred: childred.flat() }
}

h('div', { id: 'app' },
    h('ul', null),
        h('li', null,
            h('input', { type: 'checkbox', className: 'toggle' }),
            'todo list item 1',
            h('button', { className: 'remove' }, '삭제')
            ),
            h('li', { className: 'completed' },
                h('input', { type: 'checkbox', className: 'tohhle', checked: true}),
                'todo list item 2',
                h('button', { className: 'remove' }, '삭제')
                ),
            ),
            h('form',
                h('input', { type: 'text' }),
                h('button', { type: 'submit' }, '추가'),
                )
// );

function h(type, props, ...children) {}
function createElement(node) {}

const state = [
    { id: 1, completed: false, content: 'todo list item 1'},
    { id: 2, completed: true, content: 'todo list item 2'},
];

createElement(
    d 
)