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
        catched,
        config: {
            dropSpeed,

        }
    }
    */
    constructor(options) {
        super(options);
        // console.log('options', options);
        this.options.score = 0;
    }

    beforeStart() {
        this.options.fruits.map((fruit) => {
            this.initDropItem(fruit, this);
        });
        this.fruitDropping = { elem: this.getRandomDrop() };
    }

    inLoop() {
        this.fruitDropping.elem.drop();
        this.fruitDropping.elem.hitBasket();
    }

    getRandomDrop() {
        return this.options.fruits[Math.floor((Math.random() * (this.options.fruits.length)) + 0)];
    }

    initDropItem(fruit, game) {
        fruit.resetDrop = function() {
            let fruit = this;
            fruit.setPosition(fruit.position.x, -fruit.size.height);
            game.fruitDropping = { elem: game.getRandomDrop() };
            // console.log(game.fruitDropping);
        };

        fruit.drop = function() {
            let fruit = this;
            // console.log(fruit.name)
            fruit.setPosition(fruit.position.x, fruit.position.y += 3);
            if (fruit.position.y > game.options.screen.size.height) {
                fruit.resetDrop();
            }
        };

        fruit.hitBasket = function() {
            let fruit = this;
            let basket = game.options.basket;
            let rightBasket = basket.position.x + basket.size.width;

            let botFruit = fruit.position.y + fruit.size.height;
            let rightFruit = fruit.position.x + fruit.size.width;

            if (((basket.position.x <= rightFruit && rightFruit <= rightBasket) || (basket.position.x <= fruit.position.x && fruit.position.x <= rightBasket)) &&
                basket.position.y + 20 <= botFruit) {
                fruit.resetDrop();
                game.options.score++;
                game.options.scoreBoard.setTextAction(game.options.ctx, { text: game.options.score }, game.options.noop);
                if (game.options.catched[game.options.score - 1]) {
                    game.options.catched[game.options.score - 1].showAction(game.options.ctx, {}, game.options.noop);
                }
            }
        };
    }
}