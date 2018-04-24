import { assignIn } from 'lodash';

export default class ScreenObjectExample {

    /**
     * 
     * @param {*} x 
     * @param {*} y 
     * @param {*} width 
     * @param {*} height 
     * @param {*} options 
     */
    constructor(x = 0, y = 0, width = 0, height = 0, options = {}) {
        let config = assignIn({
            position: { x, y },
            size: { width, height }
        }, options);
        for (let i in config) {
            this[i] = config[i];
        }
    }

    showAction(ctx, argv, noop) {}
    hideAction(ctx, argv, noop) {}
    setTextAction(ctx, argv, noop) {}
    setPosition(ctx, argv, noop) {}
}