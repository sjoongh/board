export default class Model {
    constructor(callback) {
        const proxy = new Proxy(this, {
            get(target, property) {
                return target[property];
            },
            set(target, property, value) {
                const oldValue = target[property];
                target[property] = value;

                if (callback) {
                    callback(property, oldValue, value);
                }
                return true;
            }
        });
        return proxy;
    }
}

const predefinedProps = ['name', 'age'];

const handler = {
    set(target, property, value) {
        if (!predefinedProps.includes(property)) {
            throw new TypeError(`${property} cannot be set`);
        }

        if (property === 'age' && !Number.isIntger(value)) {
            throw new TypeError(`${property} is not an integer`);
        }
        target[property] = value;
        return true;
    }
}

import Model from './model';

export default class View {
    constructor(container) {
        this.container = container;
        this.model = new Model(this.onChanges.bind(this));

        this.timer = setInterval(this.onTick.bind(this), 1000);
    }

    onChanges(property, oldValue, newValue) {
        this.render();
    }

    render() { // 시분초 rendering
        const { hours, minutes, seconds } = this.model;
        const html = `
        <div id="wrapper">
            <span>${hours}</span>
            <span>${minutes}</span>
            <span>${seconds}</span>
        </div>`;
        // TODO : html 태그 생성.. 인데 이걸 json 데이터 CRUD로 바꾸기!!
        this.container.innerHTML = html; 
    }

    onTick() {
        const now = new Date();

        this.model.hours = now.getHours();
        this.model.minutes = now.getMinutes();
        this.model.seconds = now.getSeconds();
    }
}