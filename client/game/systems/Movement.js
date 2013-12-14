
module.exports = oaky.System.extend({

  uses: ["position", "velocity"],

  initialize: function(){ 
    
  },

  process: function(dt, entities) {

    for(var i=0; i<entities.length; i++) {
      var entity = entities[i];

      var pos = entity.get('position');

      if (entity.is("spinning")){
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
          entity.remove("target");
          entity.set("velocity", {
            x: 0,
            y: 0
          });
        }
        else {
          var n = mumps.helpers.vectors.normalize(pc, entity.get("target"));
        
          entity.set("velocity", {
            x: n.x * 2,
            y: n.y * 2
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

