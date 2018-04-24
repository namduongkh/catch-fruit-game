import CatchFruit from "../app/CatchFruit";
import ScreenObjectExample from "../app/libs/ScreenObjectExample";

let _game = new CatchFruit({
    basket: new ScreenObjectExample(0, 300, 100, 100, { name: "Basket" })
});

_game.draw();

window.game = _game;