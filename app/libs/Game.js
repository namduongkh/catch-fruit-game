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

    loop() {
        if (!this.playing) {
            return;
        }
        if (this.inLoop) {
            this.inLoop();
        }
        requestAnimationFrame(this.loop.bind(this));
    }
}