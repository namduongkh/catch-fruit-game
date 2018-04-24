import CatchFruit from "../app/CatchFruit";
import ScreenObjectExample from "../app/libs/ScreenObjectExample";

let fruit1 = new ScreenObjectExample(0, -50, 50, 50, { name: "Fruit1", id: "fruit1" })
let fruit2 = new ScreenObjectExample(120, -50, 50, 50, { name: "Fruit2", id: "fruit2" })
let scoreBoard = new ScreenObjectExample(120, 20, 50, 50, { name: "Score board", id: "scoreBoard" })

let _game = new CatchFruit({
    basket: new ScreenObjectExample(100, 300, 100, 100, { name: "Basket", id: "basket1" }),
    fruits: [fruit1, fruit2],
    scoreBoard: scoreBoard,
    catched: [new ScreenObjectExample(), new ScreenObjectExample()],
});

// _game.options.basket.draw();
// fruit.draw();
// scoreboard.draw();

_game.draw();
// _game.start();

window.game = _game;
// window.onblur = function() {
//     _game.pause();
// }
// window.onfocus = function() {
//     _game.continue();
// }