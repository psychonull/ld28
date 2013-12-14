
var sprites = null; //require('../../spriteSheets');

module.exports = oaky.System.extend({

  uses: ["display"],

  initialize: function(options){ 
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext('2d');
  },

  process: function(/*dt, entities*/) { },

  processDisplays: function(entity, x, y){
    var ctx = this.ctx;

    if (entity.has('angle')){
      var angle = entity.get('angle').rad;
      ctx.rotate(angle);
    }

    if (entity.has('scale')){
      var scale = entity.get('scale');
      ctx.scale(scale.x, scale.y);  
    }

    var displays = entity.get('display');

    if (displays.hasOwnProperty('type') && !displays.hidden){
      ctx.save();
      this["draw_" + displays.type](entity, displays, x, y);
      ctx.restore();
    }
    else if (!displays.hidden) {
      for(var sp in displays){
        if (displays.hasOwnProperty(sp) && !displays[sp].hidden){
          ctx.save();
          this["draw_" + displays[sp].type](entity, displays[sp], x, y);
          ctx.restore();
        }
      }
    }
  },

  draw_circle: function(entity, display, x, y){
    var ctx = this.ctx;

    x += display.x || 0;
    y += display.y || 0;
    var radius = (display.radius || 1);

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);

    var stroke = false;
    if (display.strokeColor){
      ctx.strokeStyle = display.strokeColor;
      stroke = true;
    }
    if (display.strokeWidth){
      ctx.lineWidth = display.strokeWidth;
      stroke = true;
    }

    if (stroke){
      ctx.stroke();
    }

    var fill = false;
    if (display.fillColor){
      ctx.fillStyle = display.fillColor;
      fill = true;
    }

    if (fill){
      ctx.fill();
    }
  },

  draw_line: function(/*entity, display*/) { },

  draw_rect: function(entity, display, x, y){
    var ctx = this.ctx;

    var sw = display.width || entity.get("size").width || 50;
    var sh = display.height || entity.get("size").height || 50;
    x += display.x || 0; 
    y += display.y || 0;

    ctx.beginPath();
    ctx.rect(x, y, sw, sh);

    if (display.strokeColor){
      ctx.strokeStyle = display.strokeColor || 'black';
      ctx.lineWidth = display.strokeWidth || 1;
      ctx.stroke();
    }

    if (display.fill){
      ctx.fillStyle = display.fill;
      ctx.fill();
    }
  },

  draw_text: function(entity, display, x, y){
    var ctx = this.ctx;

    x += display.x || 0; 
    y += display.y || 0;

    ctx.font = display.font;
    ctx.fillStyle = display.color;
    ctx.fillText(display.text, x, y);
  },

  draw_sprite: function(entity, display, x, y){
    var ctx = this.ctx;

    var sw = display.width;
    var sh = display.height;
    x += display.x || 0; 
    y += display.y || 0;

    var sprite = sprites[display.sheet];
    var img = window.mumps.repository[sprite.resource];
    var anim = sprite.animations[display.animation];
    if (!anim){
      return;
    }

    var sp = anim[display.index];

    if (display.angle){
      ctx.translate(x + sw/2, y + sw/2);

      x = -sw/2; 
      y = -sh/2;

      ctx.rotate(display.angle);
    }

    if (display.opacity){
      ctx.globalAlpha = display.opacity;
    }

    ctx.drawImage(img, sp.x, sp.y, sp.w, sp.h, x, y, sw, sh);
  },

  draw_pattern: function(){

  }

});

