
var sprites = require('../spriteSheets');
var cloud = require("../entities/cloud");

module.exports = oaky.System.extend({

  uses: ["display"],

  initialize: function(){ 
    this.lastCloud = 10;
    this.cloud = null;
  },

  process: function(dt, entities) {
    var delta = dt/1000;
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

    this.lastCloud -= delta;
    if (this.lastCloud <= 0){
      if (!this.cloud){
        this.cloud = cloud(this.game);
      }

      this.cloud.set("position", {
        x: -800,
        y: _.random(0, this.game.size.height - 50)
      });

      this.lastCloud = 20;
    }
    else if (this.cloud && this.cloud.has("position")){
      var cpos = this.cloud.get("position");

      if(cpos.x < this.game.size.width) {
        cpos.x += 1000 * delta;
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

