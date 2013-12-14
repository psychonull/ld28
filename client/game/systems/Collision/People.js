
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
          mumps.helpers.applyCircleCollisionBounce(personA, personB);

          personA.remove("target");
          personB.remove("target");

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

