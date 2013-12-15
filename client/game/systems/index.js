
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
    peopleCollision: require('./Collision/People').create(),
    peopleObstaclesCollision: require('./Collision/PeopleObstacles').create(),
    objetiveCollision: require('./Collision/Objetive').create()
  };

  systems.contagion = {
    contagion: require('./Contagion').create(),
    infection: require('./Infection').create()
  };

  systems.controls = {
    walkControl: require('./WalkControl').create({
      player: game.player
    })
  };

  systems.factories = {
    obstaclesFactory: require('./Factory/Obstacles').create()
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
    , "contagion"
    , "collisions"
    , "movement"
    , "bounds"
    , "rendering"
  ];

  _.each(order, function(value){
    _.each(systems[value], function(sys, name){
      game.addSystem(name, sys);
    });
  });
};

