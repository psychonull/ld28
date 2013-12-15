
module.exports = oaky.System.extend({

  uses: ["infectionProgress"],

  EXPOSURE_COOLDOWN: mumps.settings.infection.exposureCooldown,
  MAX_TIME_EXPOSED: mumps.settings.infection.maxExposureTime,

  initialize: function(){ 
  },

  process: function(dt, entities) {
    for(var i=0; i<entities.length; i++) {
      var entity = entities[i];

      var sickPeople = this.game.entities.get('contagionFocus');
      var anySickGuyAround = false;
      var sickGuyContagionPower = null;
      for (var j = 0; j < sickPeople.length; j++){
        var sickGuy = sickPeople[j];
        
        //var sickGuyCenter = mumps.helpers.getCenter(sickGuy);

        //if(mumps.helpers.isPointInCircle(sickGuyCenter, entityCenter, contagionFocus.radius)){
        if(mumps.helpers.isNear(entity, sickGuy, sickGuy.get("contagionFocus").radius)){
          anySickGuyAround = true;
          sickGuyContagionPower = sickGuy.get("contagionFocus").power;
          break;
        }
      }
      if (!anySickGuyAround){
        this._decreaseInfection(entity, dt);
        this._updateInfectionPercentage(entity, dt, "cooldown");
      }
      else {
        this._updateInfectionPercentage(entity, dt, "timeExposed", sickGuyContagionPower);
      }

      this._updateSickStatus(entity);
    }
  },

  _decreaseInfection: function(entity, dt){
    var infectionProgress = entity.get("infectionProgress");
    infectionProgress.exposureTime = 0;
    if (!infectionProgress.cooldown){
      infectionProgress.cooldown = this.EXPOSURE_COOLDOWN * infectionProgress.progress;
    }
    else {
      infectionProgress.cooldown -= dt/1000;
    }
  },

  _contagionCalc: function(/*dt, distance, power*/){
    // la curva la define la func
  },

  _updateInfectionPercentage: function(entity, dt, basedIn, power){
    //var infectionProgress = entity.get("infectionProgress");
    if (basedIn === "cooldown"){
      entity.get("infectionProgress").progress = (entity.get("infectionProgress")[basedIn]) / this.EXPOSURE_COOLDOWN;
    }
    else {
      entity.get("infectionProgress").progress = (power || 1) * (1 - entity.get("infectionProgress")[basedIn]) / this.MAX_TIME_EXPOSED;
    }
  },

  _updateSickStatus: function(entity){
    var infectionProgress = entity.get("infectionProgress");
    if (infectionProgress.progress <= 0){
      entity.remove("infectionProgress");
    }
    else if (infectionProgress.progress >= 1){
      entity.remove("infectionProgress");
      entity.add("contagionFocus", {
        radius: mumps.settings.infection.contagionRadius,
        power: mumps.settings.infection.contagionPower
      });
    }
  }

});