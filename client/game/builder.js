
module.exports = function(level){
  
  var dataIndex = require('./data/index.js');
  var canvas = document.getElementById('game-viewport');
  var canvasStatic = document.getElementById('game-static');

  var $doc = $(document);

  var size = {
    width: $doc.width(),
    height: $doc.height()
  };

  mumps.settings.worldSize = dataIndex[level].worldSize;

  var game = oaky.createGame({
    size: size,
    canvas: canvas,
    canvasStatic: canvasStatic
  });

  game.level = level;
  game.camera = require('./entities/camera')(game);

  function updateCameraSize() {
    game.size = {
      width: $doc.width(),
      height: $doc.height()
    };

    if (mumps.settings.worldSize.w < game.size.width){
      game.size.width = mumps.settings.worldSize.w;
    }
    if (mumps.settings.worldSize.h < game.size.height){
      game.size.h = mumps.settings.worldSize.h;
    }
    
    $('.game-ctn')
      .add('.main')
      .add('#cinema')
      .width(game.size.width)
      .height(game.size.height);

    game.camera.set("size", { 
      width: game.size.width, 
      height: game.size.height 
    });

    canvas.width = game.size.width;
    canvas.height = game.size.height;

    canvasStatic.width = game.size.width;
    canvasStatic.height = game.size.height;
  }

  $("body").css("overflow", "hidden");
  updateCameraSize();

  var player = require('./entities/person')(game, dataIndex[level].player);
  player = require('./entities/player')(game, player, dataIndex[level].player);

  game.player = player;

  game.walkLine = require('./entities/walkLine')(game);
  game.objetive = require('./entities/objetive')(game, dataIndex[level].objetive);

  function generateNpcs(){
    var npcs = dataIndex[level].npcs;
    for (var i = 0; i < npcs.length; i++){
      require('./entities/person')(game, npcs[i]);
    }
  }

  generateNpcs();

  require("./systems")(game);
  
  var controls = new mumps.Controls({
    container: canvasStatic
  });
  
  game.controls = controls;
  controls.enable();

  function pauseGame(){
    if (game.paused){
      game.start();
    }
    else {
      game.stop();
    }
  }

  controls
    .on('pause', pauseGame)
    .on('slide:start', function(e){
      if (!game.player.has("target")) {
        game.walkLine.set('walkStartingPoint', {
          x: e.x + game.camera.get("position").x,
          y: e.y + game.camera.get("position").y
        });

        game.walkLine.set('target', {
          x: e.x + game.camera.get("position").x,
          y: e.y + game.camera.get("position").y
        });
      }
    }).on('slide', function(e){

      if(game.walkLine.has('position')){
        game.walkLine.set('target', {
          x: e.x + game.camera.get("position").x,
          y: e.y + game.camera.get("position").y
        });
      }
    }).on('slide:end', function(){

      if(game.walkLine.has('position') && game.walkLine.has('target')){
        game.player.set('target', game.walkLine.get('target'));
      }
      game.walkLine.remove('walkStartingPoint');
      game.walkLine.remove('position');
    });

  game.start();

  game.on("after:destroy", function(){
    controls.off();
  });

  return game;
};
