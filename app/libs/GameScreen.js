import GameEventEmitter from './GameEventEmitter';

export default class GameScreen {
    constructor(canvasId, screenWidth, screenHeight) {
        let canvas = document.getElementById(canvasId);
        let ctx = canvas.getContext('2d');
        this.ctx = ctx;
        this.screen = {
            size: {
                width: screenWidth,
                height: screenHeight
            },
            draw: function() {
                this.ctx.fillStyle = "#000";
                this.ctx.fillRect(this.ctx.root.x, this.ctx.root.y, this.screen.size.width, this.screen.size.height);
                this.ctx.fillStyle = "#fff";
                this.ctx.fillRect(this.ctx.root.x + 1, this.ctx.root.y + 1, this.screen.size.width - 2, this.screen.size.height - 2);
            }.bind(this),
            clear: function() {
                // console.log('clear');
                this.ctx.clearRect(0, 0, canvas.width, canvas.height);
            }.bind(this)
        };
        this.noop = function() {};
        this.ctx.root = {
            x: canvas.width / 2 - screenWidth / 2,
            y: canvas.height / 2 - screenHeight / 2
        };
        this.emitter = GameEventEmitter.getInstance();
        this.emitter.on('beforeLoop', () => {
            this.screen.clear();
            this.screen.draw();
        });
        this.emitter.on('afterInit', () => {
            this.screen.draw();
        });
    }
}