import CatchFruit from "../app/CatchFruit";
import ScreenObjectExample from "../app/libs/ScreenObjectExample";
import GameScreen from "../app/libs/GameScreen";

let gameScreen = new GameScreen('gameScreen', 320, 400);

let fruit1 = new ScreenObjectExample(gameScreen.ctx, 0, -50, 50, 50, { name: "Fruit1", id: "fruit1" });
let fruit2 = new ScreenObjectExample(gameScreen.ctx, 120, -50, 50, 50, { name: "Fruit2", id: "fruit2" });
let scoreBoard = new ScreenObjectExample(gameScreen.ctx, 120, 20, 50, 50, { name: "Score board", id: "scoreBoard" });
let basket = new ScreenObjectExample(gameScreen.ctx, 100, 300, 100, 100, { name: "Basket", id: "basket1" });

let _game = new CatchFruit({
    ctx: gameScreen.ctx,
    screen: gameScreen.screen,
    noop: gameScreen.noop,
    basket,
    fruits: [fruit1, fruit2],
    scoreBoard: scoreBoard,
    catched: [new ScreenObjectExample(), new ScreenObjectExample()],
    loopMs: 0
});

window.game = _game;