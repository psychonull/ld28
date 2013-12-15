
module.exports = function(game, options){
  
  var person = game.entities.make();

  var pos = (options && _.pick(options, "x", "y")) || { x: 0, y: 0 };

  person.add("position", pos);
  person.add("velocity", { x: 0, y: 0 });
  //person.add("target", { x: 0, y: 0 });
  person.add("size", { width: 30, height: 70 });
  
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
  person.add("zindex", 2);

  if(options && options.contagionFocus){
    person.add("contagionFocus", options.contagionFocus);
  }

  return person;
};
