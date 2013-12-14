
module.exports = function(game, person){
  
  person.add("position", { x: game.size.width/2, y: game.size.height/2 });
  person.add("velocity", { x: 0, y: 0 });
  
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

  person.add("dynamic");
  person.add('player');

  return person;
};
