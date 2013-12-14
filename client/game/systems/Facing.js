
module.exports = oaky.System.extend({

  uses: ["target", "angle"],

  initialize: function(){ 
    
  },

  process: function(dt, entities) {
    
    for(var i=0; i<entities.length; i++) {
      var entity = entities[i];

      var center = mumps.helpers.getCenter(entity);
      var to = entity.get('target');
      
      var d = mumps.helpers.vectors.difference(center, to);

      var angle = mumps.helpers.vectors.angleTo(d);

      var current = entity.get("angle");

      if (angle === current){
        continue;
      }

      var distA = angle - current;
      if (Math.abs(distA) < 0.1 ){
        entity.remove("spinning");
        entity.set("angle", angle);
      }
      else {
        entity.add("spinning");
        var distB = current - angle;

        if (distA > distB){
          current += 0.1;
        }
        else {
          current -= 0.1;
        }
      }

      entity.set("angle", current);
    }
  }

});

