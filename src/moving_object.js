function MovingObject() {
    let argsObj = Array.from(arguments)[0];
    console.log("in moving object const ");
    console.log(argsObj);
    this.pos = argsObj["pos"];
    this.vel = argsObj["vel"];
    this.radius = argsObj["radius"];
    this.color = argsObj["color"];
};



MovingObject.prototype.draw = function(ctx) {
     ctx.beginPath();
     ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
     ctx.strokeStyle = this.color;
     ctx.lineWidth = 5;
     ctx.stroke() 
 };

MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
};

module.exports = MovingObject;

