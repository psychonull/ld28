
var person = require("../../entities/person");

module.exports = oaky.System.extend({

  uses: ["person"],

  initialize: function(){ 
    this.peopleMax = 30;
    this.startingInfectedPeople = mumps.settings.infection.initialInfections;
  },

  process: function(dt, entities) {
    var people = entities.length -1; // discount the player
    var infectedPeople = this.game.entities.get("contagionFocus");

    if (people < this.peopleMax){
      person(this.game, {
        x: _.random(100, mumps.settings.worldSize.w -100),
        y: _.random(100, mumps.settings.worldSize.h -50),
      });
    }

    if (infectedPeople.length < this.startingInfectedPeople){
      var npcs = this.game.entities.get('npc');
      npcs[_.random(0, npcs.length - 1)].set("contagionFocus", {
        radius: mumps.settings.infection.contagionRadius,
        power: mumps.settings.infection.contagionPower
      });
    }

  }

});

