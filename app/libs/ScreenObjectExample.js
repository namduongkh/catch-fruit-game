import { assignIn } from 'lodash';

export default class ScreenObjectExample {

    /**
     * 
     * @param {*} x 
     * @param {*} y 
     * @param {*} width 
     * @param {*} height 
     * @param {*} options 
     */
    constructor(ctx, x = 0, y = 0, width = 0, height = 0, options = {}) {
        let config = assignIn({
            ctx,
            position: { x, y },
            size: { width, height }
        }, options);
        for (let i in config) {
            this[i] = config[i];
        }
        this.draw();
    }

    showAction(ctx, argv, noop) { }
    hideAction(ctx, argv, noop) { }
    setTextAction(ctx, argv, noop) {
        // this.element.getElementsByClassName('value')[0].innerText = (argv.text || '');
    }
    setPosition(x, y) {
        this.position.x = x;
        this.position.y = y;

        // this.element.style.top = y + 'px';
        // this.element.style.left = x + 'px';

        if (this.ctx) {
            this.draw(x, y);
        }
    }

    draw(x, y) {
        x = x || this.position.x;
        y = y || this.position.y;
        // this.element = document.createElement('div');
        // this.element.id = this.id;
        // this.element.className = 'screen-component';
        // this.element.style.top = this.position.y + 'px';
        // this.element.style.left = this.position.x + 'px';
        // this.element.style.width = this.size.width + 'px';
        // this.element.style.height = this.size.height + 'px';
        // this.element.innerHTML = '<div>' + (this.name || '') + '</div><div class="value"></div>';

        // let screenGame = document.getElementById('game-screen');
        // screenGame.getElementsByClassName('screen-container')[0].appendChild(this.element);
        // console.log(this.ctx);
        if (this.ctx) {
            this.ctx.fillStyle = 'blueviolet';
            this.ctx.fillRect(this.ctx.root.x + x, this.ctx.root.y + y, this.size.width, this.size.height);
        }
    }
}