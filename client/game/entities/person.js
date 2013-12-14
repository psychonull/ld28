
module.exports = function(game){
  
  var person = game.entities.make();

  person.add("position", { x: 0, y: 0 });
  person.add("velocity", { x: 0, y: 0 });
  person.add("size", { width: 100, height: 50 });
  
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

    width: 100,
    height: 80,

    strokeColor: "red",
    strokeWidth: 2,
    fillStyle: "silver"

  });

  person.add("dynamic");

  person.add('person');

  return person;
};
