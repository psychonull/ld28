
module.exports = function(game, person){
  
  person.add("position", { x: 50, y: 50 });
  
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

  person.get("display").fill = "red";

  person.add("dynamic");
  person.add('player');

  return person;
};
