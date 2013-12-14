
module.exports = oaky.System.extend({

  uses: ["infectionProgress"],

  initialize: function(){ 
  },

  process: function(dt, entities) {
    for(var i=0; i<entities.length; i++) {
      var entity = entities[i];

      var sickPeople = this.game.entities.get('contagionFocus');
      var anySickGuyAround = false;
      for (var j = 0; j < sickPeople.length; j++){
        var sickGuy = sickPeople[j];
        
        //var sickGuyCenter = mumps.helpers.getCenter(sickGuy);

        //if(mumps.helpers.isPointInCircle(sickGuyCenter, entityCenter, contagionFocus.radius)){
        if(mumps.helpers.isNear(entity, sickGuy, sickGuy.get("contagionFocus").radius)){
          anySickGuyAround = true;
          break;
        }
      }
      if (!anySickGuyAround){
        this._decreaseInfection(dt);
      }

      this._updateSickStatus(entity);
    }
  },

  _decreaseInfection: function(/*dt*/){

  },

  _contagionCalc: function(/*dt, distance, power*/){
    // la curva la define la func
  },

  _updateSickStatus: function(entity){
    var infectionProgress = entity.get("infectionProgress");
    if (infectionProgress.progress <= 0){
      entity.remove("infectionProgress");
    }
    else if (infectionProgress.progress >= 1){
      entity.remove("infectionProgress");
      entity.add("contagionFocus", {
        radius: 70,
        power: 2
      });
    }
  }

});

