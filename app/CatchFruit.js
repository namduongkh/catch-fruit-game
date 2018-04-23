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
    }
    */
    constructor(options) {
        super(options);
        console.log('options', options);
    }

    beforeStart() {
        this.options.fruits.map((fruit) => {
            this.initDropItem(fruit).bind(this);
            fruit.startDrop();
        });
    }

    loop() {
        this.options.fruits.map((fruit) => {
            fruit.hitBasket();
        });
    }

    initDropItem(fruit) {
        fruit.resetDrop = function() {
            fruit.setPosition(fruit.position.x, -fruit.size.height);
        };

        fruit.startDrop = function() {
            fruit.position.y += 1;
            if (fruit.position.y > this.options.screen.size.height) {
                fruit.resetDrop();
            }
        };

        fruit.hitBasket = function() {
            let basket = this.options.basket;
            let rightBasket = basket.position.x + basket.size.width;
            let botFruit = fruit.position.y + fruit.size.height;
            let rightFruit = fruit.position.x + fruit.size.width;
            if (basket.x <= rightFruit && rightBasket >= fruit.position.x && basket.y <= botFruit) {
                fruit.resetDrop();
            }
        };
    }
}