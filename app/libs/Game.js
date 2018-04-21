export default class Game {

    constructor(options) {
        this.playing = false;
        this.options = options;
    }

    start() {
        if (!this.playing) {
            this.playing = true;
            requestAnimationFrame(this.loop.bind(this));
        }
    }

    stop() {
        this.playing = false;
    }

    loop() {
        if (!this.playing) {
            return;
        }
        console.log('game loop');
        requestAnimationFrame(this.loop.bind(this));
    }
}