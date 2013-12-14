
module.exports = oaky.System.extend({

  uses: ["position", "velocity"],

  initialize: function(){ 
    
  },

  process: function(dt, entities) {

    for(var i=0; i<entities.length; i++) {
      var entity = entities[i];
      
      var vel = entity.get('velocity');
      var pos = entity.get('position');

      pos.x += vel.x;
      pos.y += vel.y;

      entity.set('position', pos);
    }
  }

});

