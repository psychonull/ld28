
var Renderer = require('./index');

var RendererStatic = module.exports = Renderer.extend({

  uses: ["display", "static"],

  initialize: function(/*options*/){ 
    this._super(RendererStatic, arguments);
  },

  process: function(dt, entities) {
    var i;

    var ctx = this.ctx;
   
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    entities.sort(function(a, b){
      return (a.get('zindex') || 0) - (b.get('zindex') || 0);
    });

    for(i=0; i<entities.length; i++) {
      var entity = entities[i];

      var p = entity.get('position');
      //var s = entity.get('size');

      var 
        //sw = s.width || s.radius * 2, 
        //sh = s.height || s.radius * 2,
        //x = p.x - sw/2, 
        //y = p.y - sh/2;
        x = p.x, 
        y = p.y;

      ctx.save();

      //TODO: manage rotate & scale [should do a ctx.translate() here]

      this.processDisplays(entity, x, y);

      ctx.restore();
    }
    
  },

  draw_line: function(entity, display){
    var ctx = this.ctx;

    var x1 = display.from.x;
    var y1 = display.from.y;
    var x2 = display.to.x;
    var y2 = display.to.y;

    if (display.colorStop){
      var grad = ctx.createLinearGradient(x1, y1, x2, y2);

      for (var i=0; i<display.colorStop.length; i++){
        var cp = display.colorStop[i];
        grad.addColorStop(cp.p, cp.c);
      }

      ctx.strokeStyle = grad;
    }
    
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = display.width;
    ctx.closePath();

    ctx.stroke();
  }

});

