
module.exports = oaky.System.extend({

  uses: ["npc"],

  initialize: function(){ 
    
  },

  process: function(dt, entities) {
 
    for(var i=0; i<entities.length; i++) {
      var person = entities[i];

      if (!person.is("walking")){

        var p = person.get("position");
        var ang = _.random(0, 360);
        var vel = 2;
        var len = _.random(30, 300);

        var pt = { 
          x: (len * Math.cos(ang)),
          y: (len * Math.sin(ang))
        };

        person.set("target", { 
          x: pt.x + p.x,
          y: pt.y + p.y
        });

        var n = mumps.helpers.vectors.normalize(p, person.get("target"));
        person.add("velocity", {
          x: n.x * vel,
          y: n.y * vel
        });
        
        person.add("walking");
      }
    }
  }

});

