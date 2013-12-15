
var obstacle = require("../../entities/obstacle"),
  dataIndex = require("../../data/index");

module.exports = oaky.System.extend({

  uses: ["obstacle"],

  initialize: function(){ 
  },

  process: function(dt, entities) {
    var data = dataIndex[this.game.level].obstacles;
    if (entities.length < data.length){
      _.times(data.length, function(i){
        var options = _.defaults(data[i], {
          spriteSheet: dataIndex[this.game.level].spriteSheet
        });
        obstacle(this.game, options);
      }, this);
    }
  }

});

