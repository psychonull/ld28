
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
  
      entity.set('angle', angle);
    }
  }

});

