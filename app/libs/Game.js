import { assignIn } from 'lodash';

export default class Game {

    /**
     * 
     * @param {*} options 
     */
    constructor(options = {}) {
        this.playing = false;
        this.options = assignIn({
            screen: {
                size: {
                    width: 320,
                    height: 400
                }
            },
            ctx: {},
            noop: function () { },
            loopMs: 0
        }, options);
    }

    start() {
        if (this.beforeStart) {
            this.beforeStart();
        }
        if (!this.playing) {
            this.playing = true;
            requestAnimationFrame(this.loop.bind(this));
        }
        if (this.afterStart) {
            this.afterStart();
        }
    }

    stop() {
        if (this.beforeStop) {
            this.beforeStop();
        }
        this.playing = false;
        if (this.afterStop) {
            this.afterStop();
        }
    }

    // continue () {
    //     if (!this.playing) {
    //         this.playing = true;
    //         // requestAnimationFrame(this.loop.bind(this));
    //     }
    // }

    // pause() {
    //     this.playing = false;
    // }

    loop() {
        if (!this.playing) {
            return;
        }
        setTimeout(() => {
            if (this.inLoop) {
                this.inLoop();
            }
            requestAnimationFrame(this.loop.bind(this));
        }, this.options.loopMs);
    }

    // draw() {
    //     // let screenElem = document.getElementById('game-screen');
    //     // screenElem.style.width = this.options.screen.size.width + 'px';
    //     // screenElem.style.height = this.options.screen.size.height + 'px';
    //     this.options.ctx.fillStyle = "#fff";
    //     this.options.ctx.fillRect(this.options.ctx.root.x, this.options.ctx.root.y, this.options.screen.size.width, this.options.screen.size.height);
    // }
}