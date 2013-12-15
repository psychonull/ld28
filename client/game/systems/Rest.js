
module.exports = oaky.System.extend({

  uses: ["rest"],

  initialize: function(){ 
  },

  process: function(dt, entities) {
    var elapsed = dt / 1000;
    for(var i=0; i<entities.length; i++) {
      var entity = entities[i];
      entity.set("rest", entity.get("rest") - elapsed);

      if (entity.get("rest") <= 0){
        entity.remove("rest");  
      }
    }
  }

});

