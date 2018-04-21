export default class Audio {

    constructor(src, id) {
        this.id = id;
        this.src = src;

        this.element = document.createElement("AUDIO");

        this.element.setAttribute("id", this.id);
        this.element.setAttribute("src", global.siteUrl + this.src);

        this.element.setAttribute("controls", "controls");
    }

    /**
     * 
     * @param {object} attrs Attributes of Audio Object
     */
    embed(attrs) {
        for (let attr in attrs) {
            this.element.setAttribute(attr, attrs[attr]);
        }
        document.body.appendChild(this.element);
    }
}