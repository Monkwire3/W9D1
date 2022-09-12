const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

function Asteroid() {
    const randVec = Util.randomVec(100);
    argsObj = Array.from(arguments)[0];
    MovingObject.call(this, {"pos": argsObj["pos"], "vel": randVec, "radius": 10, "color":  "black"});
}
Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;