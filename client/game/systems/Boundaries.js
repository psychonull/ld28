
module.exports = oaky.System.extend({

  uses: ["position", "size", "boundary"],

  initialize: function(){ 

  },

  process: function(dt, entities) {

    for(var i=0; i<entities.length; i++) {
      var entity = entities[i];

      var pos = entity.get("position");
      
      var gotBoundX = false, gotBoundY = false;

      var boundary = entity.get("boundary");
      var min = boundary.min;
      var max = boundary.max;

      if (pos.x < min.x){
        pos.x = min.x;
        gotBoundX = true;
      }
      else if (pos.x > max.x){
        pos.x = max.x;
        gotBoundX = true;
      }

      if (pos.y < min.y){
        pos.y = min.y;
        gotBoundY = true;
      }
      else if (pos.y > max.y){
        pos.y = max.y;
        gotBoundY = true;
      }

      if (gotBoundX || gotBoundY){
        entity.remove('target');
        
        if (entity.has('velocity')){
          var vel = entity.get('velocity');
          vel.x = gotBoundX ? 0 : vel.x;
          vel.y = gotBoundY ? 0 : vel.y;
          entity.set('velocity', vel);
        }

        entity.set('position', pos);
      }
      
    }
  }

});

