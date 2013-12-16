
module.exports = oaky.System.extend({

  uses: [],

  initialize: function(){ 

  },

  process: function() {
    var player = this.game.player;

    if (!player.is("player")){
      return;
    }

    var objetive = this.game.objetive;

    var collide = ( 
      mumps.helpers.isNear(player, objetive, 500) &&
      mumps.helpers.entitiesCollide(player, objetive)
    ) ? true : false;

    if (collide){
      mumps._current.controls.disable();
      mumps.finished();
      this.enabled = false;
    }

  }

});

