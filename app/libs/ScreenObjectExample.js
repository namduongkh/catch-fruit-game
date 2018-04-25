import { assignIn } from 'lodash';
import GameEventEmitter from './GameEventEmitter';

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
        this.emitter = GameEventEmitter.getInstance();
        this.emitter.on('afterInit', () => {
            this.draw();
        });
        this.emitter.on('inLoop', () => {
            // console.log('object inloop')
            this.draw();
        });
    }

    showAction(ctx, argv, noop) {}
    hideAction(ctx, argv, noop) {}
    setTextAction(ctx, argv, noop) {
        // this.element.getElementsByClassName('value')[0].innerText = (argv.text || '');
        this.text = argv.text;
    }
    setPosition(x, y) {
        this.position.x = x;
        this.position.y = y;

        // this.element.style.top = y + 'px';
        // this.element.style.left = x + 'px';

        // if (this.ctx) {
        //     this.draw();
        // }
    }

    getCanvasPosition() {
        return {
            x: this.ctx.root.x + this.position.x,
            y: this.ctx.root.y + this.position.y,
            midX: this.ctx.root.x + this.position.x + this.size.width / 2,
            midY: this.ctx.root.y + this.position.y + this.size.height / 2,
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
            let canvasPosition = this.getCanvasPosition();
            // console.log('draw screen object');
            this.ctx.fillStyle = '#000';
            this.ctx.fillRect(canvasPosition.x, canvasPosition.y, this.size.width, this.size.height);
            this.ctx.fillStyle = 'lime';
            this.ctx.fillRect(canvasPosition.x + 1, canvasPosition.y + 1, this.size.width - 2, this.size.height - 2);
            this.ctx.fillStyle = "#000";
            this.ctx.font = "13px Arial";
            this.ctx.textAlign = "center";
            this.ctx.fillText((this.name || ''), canvasPosition.midX, canvasPosition.midY);
            this.ctx.fillText((this.text || ''), canvasPosition.midX, canvasPosition.midY + 15);
        }
    }
}