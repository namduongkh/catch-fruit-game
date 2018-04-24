import CatchFruit from "../app/CatchFruit";
import ScreenObjectExample from "../app/libs/ScreenObjectExample";

window.game = new CatchFruit({
    basket: new ScreenObjectExample(0, 300, 100, 100, { name: "Basket" })
});