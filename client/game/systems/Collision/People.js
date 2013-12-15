
module.exports = oaky.System.extend({

  uses: ["person", "collision"],

  initialize: function(){ 

  },

  process: function(dt, entities) {
    
    for(var i=0; i<entities.length; i++) {
      var personA = entities[i];

      for(var j=0; j<entities.length; j++) {
        var personB = entities[j];

        if (personB.id === personA.id){
          continue;
        }

        var collide = ( 
            mumps.helpers.isNear(personA, personB, 200) &&
            mumps.helpers.entitiesCollide(personA, personB)
          ) ? true : false;

        if (collide){
          personA.get("position").x -= personA.get("velocity").x;
          personA.get("position").y -= personA.get("velocity").y;

          personB.get("position").x -= personB.get("velocity").x;
          personB.get("position").y -= personB.get("velocity").y;

          personA.remove("target");
          personB.remove("target");

          personA.get("display").animation = "idle";
          personA.get("display").index = 0;

          personB.get("display").animation = "idle";
          personB.get("display").index = 0;

          if (personA.is("player")){
            personA.set("velocity", { x: 0, y: 0 });
          }
          
          if (personB.is("player")){
            personB.set("velocity", { x: 0, y: 0 });
          }
        }

      }

    }

  }

});

