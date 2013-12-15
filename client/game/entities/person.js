
module.exports = function(game, options){
  
  var person = game.entities.make();

  var pos = (options && _.pick(options, "x", "y")) || { x: 0, y: 0 };

  person.add("position", pos);
  person.add("velocity", { x: 0, y: 0 });
  person.add("speed", options && _.has(options,"speed") ? options.speed : mumps.settings.defaultPersonSpeed);
  //person.add("target", { x: 0, y: 0 });
  person.add("size", { width: 80, height: 120 });
  
  person.add("angle", options && _.has(options,"angle") ? options.angle : 0);
  person.add("scale", { x: 1, y: 1 });
  person.add("mass", 0.01);

  if (options && options.boundary){
    person.add("boundary", options.boundary);
  }
  else {
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
  }

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

  if (options && options.hasAI && options.hasAI === true || !_.has(options,"hasAI")){
    person.add('npc');
  }
  person.add('person');
  person.add("zindex", 2);

  if(options && options.contagionFocus){
    person.add("contagionFocus", options.contagionFocus);
  }

  return person;
};
