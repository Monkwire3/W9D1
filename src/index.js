document.addEventListener("DOMContentLoaded", () => {
    const MovingObject = require("./moving_object.js");
    const Util = require("./util.js");
    const Asteroid = require("./asteroid.js")
    
    console.log("index");

    const canvas = document.getElementById("game-canvas");
    canvas.height = 500;
    canvas.width = 500;

    const ctx = canvas.getContext('2d');


    const mo = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
    });

    mo.draw(ctx);
    mo.move();
    mo.draw(ctx);

    window.MovingObject = MovingObject; // For testing only
    window.Asteroid = Asteroid; // For testing only

})
