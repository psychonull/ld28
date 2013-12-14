
module.exports = oaky.System.extend({

  uses: ["contagionFocus"],

  initialize: function(){ 
  },

  process: function(dt, entities) {
    for(var i=0; i<entities.length; i++) {
      var entity = entities[i];
      var contagionFocus = entity.get("contagionFocus");
      //var entityCenter = mumps.helpers.getCenter(entity);

      var people = this.game.entities.get('person');
      for (var j = 0; j < people.length; j++){
        var guy = people[j];
        if (guy.has("contagionFocus")){
          continue;
        }
        //var guyCenter = mumps.helpers.getCenter(guy);

        //if(mumps.helpers.isPointInCircle(guyCenter, entityCenter, contagionFocus.radius)){
        if(mumps.helpers.isNear(entity, guy, contagionFocus.radius)){
          console.log('contagionbich');

          guy.set('contagionFocus', { 
            radius: 70,
            power: 2
          });
        }
        
      }

    }
  }

});

