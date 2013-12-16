
module.exports = oaky.System.extend({

  uses: ["contagionFocus", "player"],

  initialize: function(){
    this.timeAfterMumps = 2;
    this.lost = false;
  },

  process: function(dt, entities) {
    var elapsed = dt/1000;
    if(entities.length > 0) {
      this.lost = true;
      entities[0].remove('player');
      entities[0].add('npc', {rest: [0,0]});
      entities[0].set('speed', 10);
    }
    if (this.lost){
      if(this.timeAfterMumps <= 0){
        mumps.manager.showGameOver(this.game.level);
        this.enabled = false;
      }
      else {
        this.timeAfterMumps -= elapsed;
      }
    }
  },

  _contagionCalc: function(/*dt, distance, power*/){
    // la curva la define la func
  }

});

