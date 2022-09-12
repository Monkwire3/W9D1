const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

function Asteroid() {
    argsObj = Array.from(arguments)[0];
    MovingObject.call(this, {"pos": argsObj["pos"], "vel": argsObj["vel"], "radius": 5, "color":  "blue"});
}
Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;