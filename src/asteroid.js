const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

function Asteroid() {

    MovingObject.call(this);
    this.COLOR = "blue";
    this.RADIUS = 5;
}

module.exports = Asteroid;