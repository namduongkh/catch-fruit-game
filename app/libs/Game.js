export default class Game {

    /**
     * 
     * @param {*} options 
     */
    constructor(options = {}) {
        this.playing = false;
        this.options = options;
        if (!this.options.events) {
            this.options.events = {};
        }
    }

    start() {
        if (this.options.events.beforeStart) {
            this.options.events.beforeStart();
        }
        if (!this.playing) {
            this.playing = true;
            requestAnimationFrame(this.loop.bind(this));
        }
        if (this.options.events.afterStart) {
            this.options.events.afterStart();
        }
    }

    stop() {
        if (this.options.events.beforeStop) {
            this.options.events.beforeStop();
        }
        this.playing = false;
        if (this.options.events.afterStop) {
            this.options.events.afterStop();
        }
    }

    loop() {
        if (!this.playing) {
            return;
        }
        if (this.options.loop) {
            this.options.loop();
        }
        requestAnimationFrame(this.loop.bind(this));
    }
}