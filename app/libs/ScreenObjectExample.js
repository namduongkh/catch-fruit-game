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
            this.playing = true;
            this.draw();
            this.playing = false;
        });
    }

    showAction(ctx, argv, noop) { }
    hideAction(ctx, argv, noop) { }
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
        let x = this.ctx.root.x + this.position.x;
        let y = this.ctx.root.y + this.position.y;
        return {
            x: x,
            y: y,
            midX: x + this.size.width / 2,
            midY: y + this.size.height / 2,
            right: x + this.size.width,
            bottom: y + this.size.height,
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
            if (this.image) {
                let image = new Image();
                image.src = this.image;
                this.ctx.drawImage(image, canvasPosition.x + 1, canvasPosition.y + 1);
            } else {
                this.ctx.fillStyle = 'lime';
                this.ctx.fillRect(canvasPosition.x + 1, canvasPosition.y + 1, this.size.width - 2, this.size.height - 2);
            }
            this.ctx.fillStyle = "#000";
            this.ctx.font = "13px Arial";
            this.ctx.textAlign = "center";
            this.ctx.fillText((this.name || ''), canvasPosition.midX, canvasPosition.midY);
            this.ctx.fillText((this.text || ''), canvasPosition.midX, canvasPosition.midY + 15);
        }
    }

    onDrag() {
        this.emitter.on('screenMouseMoving', (data) => {
            if (this.ctx) {
                let { e, moved } = data;

                let mousePosition = {
                    x: e.offsetX,
                    y: e.offsetY
                };

                let canvasPosition = this.getCanvasPosition();

                if (canvasPosition.x <= mousePosition.x && canvasPosition.right >= mousePosition.x &&
                    canvasPosition.y <= mousePosition.y && canvasPosition.bottom >= mousePosition.y) {

                    this.setPosition(this.position.x + moved.x, this.position.y + moved.y);
                    if (!this.playing) {
                        this.draw();
                    }
                }
            }
        });
    }
}