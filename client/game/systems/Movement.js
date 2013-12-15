
module.exports = oaky.System.extend({

  uses: ["position", "velocity", "speed"],

  initialize: function(){ 
  },

  process: function(dt, entities) {

    for(var i=0; i<entities.length; i++) {
      var entity = entities[i];

      var pos = entity.get('position');

      if (entity.is("spinning")){
        //entity.get("display").animation = "idle";
        entity.set("velocity", {
          x: 0,
          y: 0
        });
      }
      else if (entity.has("target")){

        var pc = mumps.helpers.getCenter(entity);
        var l = mumps.helpers.vectors.length(pc, entity.get("target"));
        var gotTarget = (l < 10) ? true : false;

        if (gotTarget){
          
          entity.get("display").animation = "idle";
          entity.get("display").index = 0;
          
          entity.remove("target");
          entity.set("velocity", {
            x: 0,
            y: 0
          });
          if(entity.is("npc")){
            var restRange = entity.get("npc").rest;
            entity.set("rest", _.random(restRange[0], restRange[1]));
          }
        }
        else {
          if (entity.get("display").animation === "idle"){
            entity.get("display").animation = "walking";
            entity.get("display").index = 0;
          }

          var n = mumps.helpers.vectors.normalize(pc, entity.get("target"));
        
          entity.set("velocity", {
            x: n.x * entity.get("speed"),
            y: n.y * entity.get("speed")
          });
        }
      }
      
      var vel = entity.get('velocity');

      pos.x += vel.x;
      pos.y += vel.y;

      entity.set('position', pos);
    }
  }

});

