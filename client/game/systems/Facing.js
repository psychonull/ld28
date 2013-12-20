
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

      if (entity.is("spinning")){
        var spin = entity.get("spinning");
        current += spin;
        entity.set("angle", current);
      }

      var dif = this.getShortestArc(current, angle);

      if (Math.abs(dif) < 0.2 ){
        entity.remove("spinning");
        entity.set("angle", angle);
      }
      else if (!entity.is("spinning")){
        entity.add("spinning", 0.2 * this.getTurnDirection(current, angle));
      }
    }
  },

  getShortestArc: function(a, b){
    var M_PI = Math.PI;

    if (Math.abs(b - a) < M_PI) {
      return b-a;
    }

    if (b > a) {
      return b - a - M_PI * 2.0;
    }

    return b - a + M_PI * 2.0;
  },

  getTurnDirection: function(current, angle){
    var currentDeg = mumps.helpers.angleToDeg(current),
      angleDeg = mumps.helpers.angleToDeg(angle);
    return Math.abs((currentDeg-angleDeg+360)%360)>180 ? 1 : -1;
  }


});

