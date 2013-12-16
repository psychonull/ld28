
module.exports = function(game, options){
  
  var person = game.entities.make();
  options = _.defaults(options || {}, {
    x: 0,
    y: 0,
    speed: mumps.settings.defaultPersonSpeed,
    angle: 0,
    boundary: {
      min: {
        x: 0,
        y: 0
      },
      max: {
        x: mumps.settings.worldSize.w,
        y: mumps.settings.worldSize.h
      }
    },
    inmune: false,
    skin: 1
  });

  var pos = _.pick(options, "x", "y");

  person.add("position", pos);
  person.add("velocity", { x: 0, y: 0 });
  person.add("speed", options.speed);
  person.add("size", { width: 80, height: 120 });
  
  person.add("angle", options.angle);
  person.add("scale", { x: 1, y: 1 });
  person.add("mass", 0.01);

  person.add("boundary", options.boundary);

  person.add("skin", options.skin);

  person.add("display", {
    type: "sprite",
    
    x: 0,
    y: 0,
    width: 80,
    height: 120,

    sheet: "person",
    animation: "idle_" + options.skin,
    index: 0,
    loop: true,
    frameTime: 200
  });

  person.add("collision", 45);

  person.add("dynamic");

  if (options.npc || !_.has(options,"npc")){ // npc = false wont add npc
    person.add('npc', _.defaults(options.npc || {}, { rest: mumps.settings.defaultNPCRest }));
  }

  person.add('person');
  person.add("zindex", 2);

  if(options.contagionFocus){
    person.add("contagionFocus", options.contagionFocus);
  }

  if(options.inmune){
    person.add("inmune");
  }

  return person;
};
