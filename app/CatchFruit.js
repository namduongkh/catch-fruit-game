import Game from './libs/Game';

export default class CatchFruit extends Game {

    /*
    options = {
        screen,
        ctx,
        noop,
        basket,
        fruits,
        scoreBoard,
        catched
    }
    */
    constructor(options) {
        super(options);
        console.log('options', options);
        this.options.score = 0;
    }

    beforeStart() {
        this.options.fruits.map((fruit) => {
            this.initDropItem(fruit);
        });
        this.fruitDropping = { elem: this.getRandomDrop() };
    }

    inLoop() {
        this.fruitDropping.elem.drop();
        this.fruitDropping.elem.hitBasket();
    }

    getRandomDrop() {
        return this.options.fruits[Math.floor((Math.random() * (this.options.fruits.length - 1)) + 0)];
    }

    initDropItem(fruit) {
        fruit.resetDrop = function () {
            fruit.setPosition(fruit.position.x, -fruit.size.height);
            this.fruitDropping = { elem: this.getRandomDrop() };
        }.bind(this);

        fruit.drop = function () {
            fruit.setPosition(fruit.position.x, fruit.position.y += 3);
            if (fruit.position.y > this.options.screen.size.height) {
                fruit.resetDrop();
            }
        }.bind(this);

        fruit.hitBasket = function () {
            let basket = this.options.basket;
            let rightBasket = basket.position.x + basket.size.width;
            let botFruit = fruit.position.y + fruit.size.height;
            let rightFruit = fruit.position.x + fruit.size.width;

            if (((basket.position.x <= rightFruit && rightFruit <= rightBasket) || (basket.position.x >= fruit.position.x && rightBasket >= fruit.position.x)) &&
                basket.position.y + 20 <= botFruit) {
                fruit.resetDrop();
                this.options.score++;
                this.options.scoreBoard.setTextAction(this.options.ctx, { text: this.options.score }, this.options.noop);
                if (this.options.catched[this.options.score - 1]) {
                    this.options.catched[this.options.score - 1].showAction(this.options.ctx, {}, this.options.noop);
                }
            }
        }.bind(this);
    }
}