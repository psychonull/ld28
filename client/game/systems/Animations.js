
var sprites = require('../spriteSheets');

module.exports = oaky.System.extend({

  uses: ["display"],

  initialize: function(){ 

  },

  process: function(dt, entities) {
    var lt = this.game.gameTime.lastTime;

    for(var i=0; i<entities.length; i++) {
      var entity = entities[i];

      var display = entity.get('display');

      if (display.hasOwnProperty('type')){
        this.updateAnimation(display, lt);
      }
      else {
        for(var sp in display){
          if (display.hasOwnProperty(sp)){
            this.updateAnimation(display[sp], lt);
          }
        }
      } 
    }
  },

  updateAnimation: function(sp, lt){
    if (sp.type !== "sprite"){
      return;
    }

    var sheet = sprites[sp.sheet];
    var animation = sheet.animations[sp.animation];
    
    if (animation && animation.length > 1){

      if (sp.frameTime){
        if (!sp.lastFrameTime || 
          (sp.lastFrameTime && lt - sp.lastFrameTime > sp.frameTime)){    
            
          sp.index++;
          sp.lastFrameTime = new Date();
        }
      }
      else {
        sp.index++;  
      }
      
      if (sp.index >= animation.length){
        sp.index = 0;

        if (!sp.loop){
          sp.animation = "idle";
        }
      }
    }
    else {
      sp.index = 0;
    }
  }

});

