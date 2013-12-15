
var obstacle = require("../../entities/obstacle"),
  data = require("../../data/obstacles");

module.exports = oaky.System.extend({

  uses: ["obstacle"],

  initialize: function(){ 
    
  },

  process: function(dt, entities) {
    if (entities.length < data.length){
      _.times(data.length, function(i){
        obstacle(this.game, data[i]);
      }, this);
    }
  }

});

