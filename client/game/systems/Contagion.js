
module.exports = oaky.System.extend({

  uses: ["contagionFocus"],

  MAX_TIME_EXPOSED: mumps.settings.infection.maxExposureTime,

  initialize: function(){ 
  },

  process: function(dt, entities) {
    for(var i=0; i<entities.length; i++) {
      var entity = entities[i];
      var contagionFocus = entity.get("contagionFocus");

      var people = this.game.entities.get('person');
      for (var j = 0; j < people.length; j++){
        var guy = people[j];
        if (guy.has("contagionFocus")){
          continue;
        }

        if(mumps.helpers.isNear(entity, guy, contagionFocus.radius)){
          if(!guy.has('infectionProgress')){
            guy.set('infectionProgress', {
              progress: 0.01,
              timeExposed: this.MAX_TIME_EXPOSED
            });  
          }
          else {
            this._updateInfectionPercentage(guy, dt);
          }
          
        }
        
      }

    }
  },

  _updateInfectionPercentage: function(guy, dt){
    guy.get("infectionProgress").timeExposed -= dt/1000;
    guy.get("infectionProgress").progress = (1 - guy.get("infectionProgress").timeExposed) / this.MAX_TIME_EXPOSED;
  },

  _contagionCalc: function(/*dt, distance, power*/){
    // la curva la define la func
  }

});

