
module.exports = function(game, pos){
  
  var person = game.entities.make();

  person.add("position", pos || { x: 0, y: 0 });
  person.add("velocity", { x: 0, y: 0 });
  person.add("target", { x: 0, y: 0 });
  person.add("size", { width: 70, height: 30 });
  
  person.add("angle", 0);
  person.add("scale", { x: 1, y: 1 });

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
    width: 70,
    height: 30,

    strokeColor: "red",
    strokeWidth: 2,
    fill: "silver"

  });

  person.add("dynamic");

  person.add('person');
  person.add('alive');

  return person;
};
