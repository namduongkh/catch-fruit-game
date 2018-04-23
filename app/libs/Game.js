export default class Game {

    /**
     * 
     * @param {*} options 
     */
    constructor(options = {}) {
        this.playing = false;
        this.options = options;
    }

    start() {
        if (this.beforeStart) {
            this.beforeStart().bind(this);
        }
        if (!this.playing) {
            this.playing = true;
            requestAnimationFrame(this.loop.bind(this));
        }
        if (this.afterStart) {
            this.afterStart().bind(this);
        }
    }

    stop() {
        if (this.beforeStop) {
            this.beforeStop().bind(this);
        }
        this.playing = false;
        if (this.afterStop) {
            this.afterStop().bind(this);
        }
    }

    loop() {
        if (!this.playing) {
            return;
        }
        if (this.options.loop) {
            this.options.loop().bind(this);
        }
        requestAnimationFrame(this.loop.bind(this));
    }
}