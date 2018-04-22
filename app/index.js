import CatchFruit from "./CatchFruit";

window.newGame = new CatchFruit({
    events: {
        // beforeStart: () => {
        //     console.log('beforeStart');
        // },
        // afterStart: () => {
        //     console.log('afterStart');
        // },
        // beforeStop: () => {
        //     console.log('beforeStop');
        // },
        // afterStop: () => {
        //     console.log('afterStop');
        // },
    },
    loop: () => {
        console.log('loop');
    }
});

// newGame.start();