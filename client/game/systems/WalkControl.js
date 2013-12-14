
module.exports = oaky.System.extend({

  uses: [],

  initialize: function(){ 
  },

  process: function() {
    var playerCenter = mumps.helpers.getCenter(this.game.player);
    var entity = this.game.walkLine;

    if (!entity.has('walkStartingPoint')){
      return;
    }
    var from = entity.get("walkStartingPoint");
    var isStartInPlayer = mumps.helpers.isPointInCircle(from, playerCenter, this.game.player.get("collision"));

    if(isStartInPlayer){
      entity.set("position", from);
    }
    else {
      entity.remove("position");
    }

  }

});

