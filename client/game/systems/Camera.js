
module.exports = oaky.System.extend({

  uses: [],

  initialize: function(options){ 
    this.follow = options.follow;
    this.min = options.min;
    this.max = options.max;
  },

  process: function() {

    var cPos = this.game.camera.get('position');
    var cSize = this.game.camera.get('size');

    var fPos = this.follow.get('position');

    cPos.x = fPos.x - cSize.width/2;
    cPos.y = fPos.y - cSize.height/2;

    if (cPos.x < this.min.x){
      cPos.x = this.min.x;
    }
    if (cPos.y < this.min.y){
      cPos.y = this.min.y;
    }

    if (cPos.x > this.max.x - cSize.width){
      cPos.x = this.max.x - cSize.width;
    }
    if (cPos.y > this.max.y - cSize.height){
      cPos.y = this.max.y - cSize.height;
    }

    this.game.camera.set('position', cPos);

  }

});

