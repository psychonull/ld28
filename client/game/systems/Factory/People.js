
var person = require("../../entities/person");

module.exports = oaky.System.extend({

  uses: ["person"],

  initialize: function(){ 
    this.peopleMax = 20;
  },

  process: function(dt, entities) {
    var people = entities.length -1; // discount the player

    if (people < this.peopleMax){
      person(this.game, {
        x: _.random(100, mumps.settings.worldSize.w -100),
        y: _.random(100, mumps.settings.worldSize.h -50),
      });
    }
  }

});

