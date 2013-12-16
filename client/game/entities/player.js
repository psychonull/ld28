
module.exports = function(game, person, options){
  
  person.add("position", { 
    x: options.x || 50, 
    y: options.y || 50 
  });
  
  person.add("boundary", {
    min: {
      x: 0,
      y: 0
    },
    max: {
      x: mumps.settings.worldSize.w,
      y: mumps.settings.worldSize.h
    }
  });

  var skin = 0;
  person.get("display").fill = "red";
  person.get("display").animation = "idle_" + skin;
  person.set("skin", skin);

  person.add("dynamic");
  person.add('player');
  person.remove('npc');
  person.add("zindex", 4);

  return person;
};
