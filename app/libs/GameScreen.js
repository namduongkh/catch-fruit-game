export default class GameScreen {
    constructor(canvas, screenWidth, screenHeight) {
        let ctx = canvas.getContext('2d');
        this.ctx = ctx;
        this.screen = {
            size: {
                width: screenWidth,
                height: screenHeight
            },
            draw: function () {
                this.ctx.fillStyle = "#fff";
                this.ctx.fillRect(this.ctx.root.x, this.ctx.root.y, this.screen.size.width, this.screen.size.height);
            }.bind(this)
        };
        this.noop = function () { };
        this.ctx.root = {
            x: canvas.width / 2 - screenWidth / 2,
            y: canvas.height / 2 - screenHeight / 2
        };
    }
}