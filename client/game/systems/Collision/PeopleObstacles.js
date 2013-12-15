
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
            this.checkCollision(person, obstacle)
          ) ? true : false;

        if (collide){
          person.remove("target");

          person.get("display").animation = "idle";
          person.get("display").index = 0;

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

    var collide = mumps.helpers.circleRectangleCollide(circle, rect);

    if (collide){
      person.get("position").x -= person.get("velocity").x;
      person.get("position").y -= person.get("velocity").y;
    }

    return collide;
  }

});

