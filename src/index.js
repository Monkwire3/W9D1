document.addEventListener("DOMContentLoaded", () => {
    const MovingObject = require("./moving_object.js");
    const Util = require("./util.js");
    const Asteroid = require("./asteroid.js");
    const Game = require("./game.js");
    
    console.log("index");

    const canvas = document.getElementById("game-canvas");
    canvas.height = 700;
    canvas.width = 700;

    const ctx = canvas.getContext('2d');


    const mo = new Asteroid({
        pos: [100, 100],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
    });

    mo.draw(ctx);
    mo.move();
    mo.draw(ctx);

    const game = new Game();
    game.addAsteroids();
    game.draw(ctx);
    // game.move();
    // game.draw(ctx);

    // window.MovingObject = MovingObject; // For testing only
    // window.Asteroid = Asteroid; // For testing only
    // window.Game = Game;

})
