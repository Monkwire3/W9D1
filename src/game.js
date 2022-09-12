const Asteroid = require("./asteroid");

function Game() {
    this.asteroids = [];
    this.DIM_X = 700;
    this.DIM_Y = 700;
    this.NUM_ASTEROIDS = 7;


};

Game.prototype.addAsteroids = function() {
    while (this.asteroids.length < this.NUM_ASTEROIDS) {
        this.asteroids.push(new Asteroid({"pos": this.randomPosition()}));
    };
};

Game.prototype.randomPosition = function() {
    const posX = Math.floor(Math.random() * this.DIM_X);
    const posY = Math.floor(Math.random() * this.DIM_Y);

    return [posX, posY];
};


Game.prototype.draw = function(ctx) {
    // clearRect(ctx);
    console.log("in Game.draw")
    ctx.clearRect(0, 0, 700, 700);
    
    for (let i = 0; i < this.asteroids.length; i++) {
        console.log(this.asteroids[i])
        this.asteroids[i].draw(ctx);
    };
};

Game.prototype.move = function() {
    for (let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].move();
    };
};

module.exports = Game;