
module.exports = function(game){
  var systems = {};

  systems.camerasAndFacing = {

    camera: require('./Camera').create({
      follow: game.player,
      min: {
        x: 0,
        y: 0
      },
      max: {
        x: mumps.settings.worldSize.w,
        y: mumps.settings.worldSize.h
      }
    }),

    facing: require('./Facing').create()
  };

  systems.movement = {
    iaNPC: require('./iaNPC').create(),
    movement: require('./Movement').create()
  };

  systems.collisions = {
    peopleCollision: require('./Collision/People').create()
  };

  systems.contagion = {
    contagion: require('./Contagion').create()
  };

  systems.controls = {
    walkControl: require('./WalkControl').create({
      player: game.player
    })
  };

  systems.factories = {
    peopleFactory: require('./Factory/People').create()
  };

  systems.bounds = {
    boundaries: require('./Boundaries').create()
  };

  systems.rendering = {

    rendererDynamic: require('./Renderer/Dynamic').create({
      canvas: game.canvas
    }),

    rendererStatic: require('./Renderer/Static').create({
      canvas: game.canvasStatic
    })

  };

  var order = [
      "camerasAndFacing"
    , "controls"
    , "factories"
    , "movement"
    , "contagion"
    , "collisions"
    , "bounds"
    , "rendering"
  ];

  _.each(order, function(value){
    _.each(systems[value], function(sys, name){
      game.addSystem(name, sys);
    });
  });
};

