
var Renderer = require('./index');

var RendererDynamic = module.exports = Renderer.extend({

  uses: ["display", "dynamic"],

  initialize: function(/*options*/){ 
    this._super(RendererDynamic, arguments);

    /*
    this.scenary = options.scenary || "sunny";

    this.bg0 = this.ctx.createPattern(mumps.repository[this.scenary + "_bg0"], 'repeat');
    this.bg1 = this.ctx.createPattern(mumps.repository[this.scenary + "_bg1"], 'repeat');
    this.bg2 = this.ctx.createPattern(mumps.repository[this.scenary + "_bg2"], 'repeat');
    */

    this.lastPosX = 0;
    this.lastPosY = 0;
  },

  process: function(dt, entities) {
    var i;

    var ctx = this.ctx;
    var xView = this.game.camera.get('position').x;
    var yView = this.game.camera.get('position').y;

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Background
    
    //this.drawBackground();

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

  updateLastPos: function(){
    this.lastPosX += 1;
  },

  drawBackground: function(){
    var ctx = this.ctx;
    var pc = this.game.camera.get('position');
    var sc = this.game.camera.get('size');

    var bgX = -Math.round(pc.x);
    var bgY = -Math.round(pc.y);

    ctx.save();
    
    ctx.rect(0, 0, sc.width, sc.height);
    ctx.fillStyle = this.bg0;
    ctx.translate(bgX, bgY);
    ctx.fill();

    this.updateLastPos();

    ctx.rect(0, 0, sc.width, sc.height);
    ctx.fillStyle = this.bg2;
    ctx.translate(this.lastPosX*2, this.lastPosY);
    ctx.fill();

    ctx.rect(0, 0, sc.width, sc.height);
    ctx.fillStyle = this.bg1;
    ctx.translate(this.lastPosX, this.lastPosY);
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

    //DEBUG COLLISIONS
    if (entity.has('collision')){

      var posC = mumps.helpers.getCenter(entity);
      var r = entity.get('collision');

      ctx.beginPath();
      ctx.arc(posC.x - xView, posC.y - yView, r, 0, 2 * Math.PI, false);
      ctx.strokeStyle = 'orange';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    //DEBUG POSITION AND SIZE
    ctx.beginPath();
    ctx.rect(p.x - xView, p.y - yView, s.width, s.height);
    ctx.strokeStyle = 'gray';
    ctx.lineWidth = 2;
    ctx.stroke();

    if (entity.has('testPoint')){
      var c = entity.get('testPoint');
      ctx.beginPath();
      ctx.arc(c.x - xView, c.y - yView, c.r, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'red';
      ctx.fill();
    }

  },

  draw_line: function(entity, display){
    var ctx = this.ctx;

    var xView = this.game.camera.get('position').x;
    var yView = this.game.camera.get('position').y;

    var x1 = display.from.x - xView;
    var y1 = display.from.y - yView;
    var x2 = display.to.x - xView;
    var y2 = display.to.y - yView;

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

