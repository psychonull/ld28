
module.exports = function(game, pos){
  
  var person = game.entities.make();

  person.add("position", pos || { x: 0, y: 0 });
  person.add("velocity", { x: 0, y: 0 });
  //person.add("target", { x: 0, y: 0 });
  person.add("size", { width: 80, height: 120 });
  
  person.add("angle", 0);
  person.add("scale", { x: 1, y: 1 });
  person.add("mass", 0.01);

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

/*
  person.add("display", {
    type: "rect",

    x: 0,
    y: 0,
    width: 30,
    height: 70,

    strokeColor: "red",
    strokeWidth: 2,
    fill: "silver"

  });
*/
  
  person.add("display", {
    type: "sprite",
    
    x: 0,
    y: 0,
    width: 80,
    height: 120,

    sheet: "person",
    animation: "idle",
    index: 0,
    loop: true,
    frameTime: 200
  });

  person.add("collision", 45);

  person.add("dynamic");

  person.add('npc');
  person.add('person');
  person.add("zindex", 2);

  return person;
};
