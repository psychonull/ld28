var hudSpritesheet = require('../../spriteSheets/hud');

module.exports = oaky.System.extend({

  uses: ["display", "playerStatus"],

  initialize: function(){ 

  },

  process: function(dt, entities) {
    var infectionPercentage = this.game.player.has("infectionProgress") ? 
                              this.game.player.get("infectionProgress").progress :
                              0;
    var animationsLength = _.keys(hudSpritesheet.animations).length;
    var percentagePerImage = 1 / animationsLength;
    for(var i=0; i<entities.length; i++) {
      var entity = entities[i];
      var aux = 0;
      var animationIndex = 1;
      var color = mumps.helpers.colors.rgb_col_perc(infectionPercentage * 100);
      for (var j = 0; j < animationsLength; j++){
        if (infectionPercentage > aux){
          animationIndex = j + 1;
          aux += percentagePerImage;
        }
        else {
          break;
        }
      }
      
      entity.get("display").animation = 'infection_bar' + animationIndex; 
      entity.get("display").replaceColor = {
        from: [255, 255, 255],
        to: color
      };
    }
  }

});

