
module.exports = oaky.System.extend({

  uses: ["person", "collision"],

  initialize: function(){ 

  },

  process: function(dt, entities) {

    var obstacles = this.game.entities.get("obstacle");

    for(var i=0; i<entities.length; i++) {
      var person = entities[i];

      for(var j=0; j<obstacles.length; j++) {
        var obstacle = obstacles[j];

        var collide = ( 
            mumps.helpers.isNear(person, obstacle, 200) &&
            this.checkCollision(person, obstacle)
          ) ? true : false;

        if (collide){
          person.remove("target");

          if (person.is("player")){
            person.set("velocity", { x: 0, y: 0 });
          }
        }

      }

    }

  },

  checkCollision: function(person, obstacle){

    var pc = mumps.helpers.getCenter(person);

    var circle = {
      x: pc.x,
      y: pc.y,
      r: person.get("collision")
    };

    var rect = {
      x: obstacle.get("position").x,
      y: obstacle.get("position").y,
      width: obstacle.get("size").width,
      height: obstacle.get("size").height
    };

    var dist = mumps.helpers.circleRectangleCollideDistance(circle, rect);
    var distanceSquared = (dist.x * dist.x) + (dist.y * dist.y);
    var collide = distanceSquared < (circle.r * circle.r);

    if (collide){
      person.get("position").x -= person.get("velocity").x;
      person.get("position").y -= person.get("velocity").y;
    }

    return collide;
  }

});

