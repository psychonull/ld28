
module.exports = function(game, pos){
  
  var person = game.entities.make();

  person.add("position", pos || { x: 0, y: 0 });
  person.add("velocity", { x: 0, y: 0 });
  //person.add("target", { x: 0, y: 0 });
  person.add("size", { width: 30, height: 70 });
  
  person.add("angle", 0);
  person.add("scale", { x: 1, y: 1 });
  person.add("mass", 1);

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

  person.add("collision", 30);

  person.add("dynamic");

  person.add('npc');
  person.add('person');

  person.add("infectionProgress", 0);

  return person;
};
