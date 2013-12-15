
var Renderer = require('./index');

var RendererDynamic = module.exports = Renderer.extend({

  uses: ["display", "dynamic", "position"],

  initialize: function(/*options*/){ 
    this._super(RendererDynamic, arguments);

    this.bg = this.ctx.createPattern(mumps.repository.bg, 'repeat');
  },

  process: function(dt, entities) {
    var i;

    var ctx = this.ctx;
    var xView = this.game.camera.get('position').x;
    var yView = this.game.camera.get('position').y;

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Background
    
    this.drawBackground();

    // Dynamic Entities

    entities.sort(function(a, b){
      return (a.get('zindex') || 0) - (b.get('zindex') || 0);
    });

    for(i=0; i<entities.length; i++) {
      var entity = entities[i];

      if (entity.has('particles') && entity.has('particlesBack')){
        ctx.save();
        this.drawParticles(entity, xView, yView);
        ctx.restore();
      }

      var p = entity.get('position');
      var s = entity.get('size');

      var 
        sw = s.width || s.radius * 2, 
        sh = s.height || s.radius * 2,
        x = p.x + sw/2, 
        y = p.y + sh/2;

      ctx.save();

      ctx.translate(x - xView, y - yView);

      x = -sw/2; 
      y = -sh/2;

      this.processDisplays(entity, x, y);

      ctx.restore();

      if (entity.has('particles') && !entity.has('particlesBack')){
        ctx.save();
        this.drawParticles(entity, xView, yView);
        ctx.restore();
      }

      this.drawDebug(entity, xView, yView, p, s);
    } 
  },

  drawBackground: function(){
    var ctx = this.ctx;
    var pc = this.game.camera.get('position');
    var sc = this.game.camera.get('size');

    var bgX = -Math.round(pc.x);
    var bgY = -Math.round(pc.y);

    ctx.save();
    
    ctx.rect(0, 0, sc.width, sc.height);
    ctx.fillStyle = this.bg;
    ctx.translate(bgX, bgY);
    ctx.fill();

    ctx.restore();
  },

  drawParticles: function(entity, xView, yView){
    var ctx = this.ctx;
      
    var particles = entity.get('particles');

    for (var ps in particles){
      if (particles.hasOwnProperty(ps)){

        var pool = particles[ps].pool;

        for(var i=0; i<pool.length; i++){
          var p = pool[i];

          if (p.life > 0 && p.color){
            ctx.beginPath();
            ctx.arc(p.x - xView, p.y - yView, p.radius * p.scale, 0, 2 * Math.PI);
            ctx.fillStyle = 'rgba(' + p.color[0] + ',' + p.color[1] + ',' + p.color[2] + ',' + p.color[3] + ')';
            ctx.fill();
          }
        }

      }
    }

  },

  drawDebug: function(entity, xView, yView, p, s){
    var ctx = this.ctx;
    var posC = mumps.helpers.getCenter(entity);

    //DEBUG COLLISIONS
    if (entity.has('collision')){
      var r = entity.get('collision');

      ctx.beginPath();
      ctx.arc(posC.x - xView, posC.y - yView, r, 0, 2 * Math.PI, false);
      ctx.strokeStyle = 'orange';
      ctx.lineWidth = 3;
      ctx.stroke();
    }
   
    //DEBUG POSITION AND SIZE
    ctx.beginPath();
    ctx.rect(p.x - xView, p.y - yView, s.width, s.height);

    //DEBUG INFECTION
    if (entity.has("infectionProgress")){
      var ip = entity.get("infectionProgress").progress;
      ctx.strokeStyle = mumps.helpers.colors.hsl_col_perc(1 - ip, 0, 100);
      ctx.fillStyle = mumps.helpers.colors.hsl_col_perc(1 - ip, 0, 100);
      ctx.fill();
    }
    else {
      ctx.strokeStyle = 'red';
    }
    
    ctx.lineWidth = 3;
    ctx.stroke();

    //DEBUG CONTAGION FOCUS
    if (entity.has("contagionFocus")){
      var cf = entity.get("contagionFocus").radius;
      ctx.beginPath();
      ctx.arc(posC.x - xView, posC.y - yView, cf, 0, 2 * Math.PI, false);
      ctx.strokeStyle = 'green';
      ctx.lineWidth = 2;
      ctx.stroke();
    }


  },

  draw_line: function(entity, display){
    var ctx = this.ctx;

    var xView = this.game.camera.get('position').x;
    var yView = this.game.camera.get('position').y;

    var x1 = entity.get("position").x - xView;
    var y1 = entity.get("position").y - yView;
    var x2 = entity.get("target").x - xView;
    var y2 = entity.get("target").y - yView;

    ctx.strokeStyle = display.color;
    
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = display.width;
    ctx.closePath();

    ctx.stroke();
  }

});

