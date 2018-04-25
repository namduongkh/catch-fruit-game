import CatchFruit from "../app/CatchFruit";
import ScreenObjectExample from "../app/libs/ScreenObjectExample";
import GameScreen from "../app/libs/GameScreen";

// let images = {
//     fruit: require('./assets/lime.png'),
// };

let gameScreen = new GameScreen('gameScreen', 320, 400);

let fruit1 = new ScreenObjectExample(gameScreen.ctx, 0, -50, 50, 50, { name: "Fruit1", image: './assets/lime.png' });
let fruit2 = new ScreenObjectExample(gameScreen.ctx, 120, -50, 50, 50, { name: "Fruit2" });
let fruit3 = new ScreenObjectExample(gameScreen.ctx, 200, -50, 50, 50, { name: "Fruit3" });
let scoreBoard = new ScreenObjectExample(gameScreen.ctx, 120, 20, 50, 50, { name: "Score board" });
let basket = new ScreenObjectExample(gameScreen.ctx, 100, 300, 100, 100, { name: "Basket" });

let _game = new CatchFruit({
    ctx: gameScreen.ctx,
    screen: gameScreen.screen,
    noop: gameScreen.noop,
    basket,
    fruits: [fruit1, fruit2, fruit3],
    scoreBoard: scoreBoard,
    catched: [new ScreenObjectExample(), new ScreenObjectExample()],
    loopMs: 0
});

window.game = _game;