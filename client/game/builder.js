
module.exports = function(){
  
  var canvas = document.getElementById('game-viewport');
  var canvasStatic = document.getElementById('game-static');

  var $doc = $(document);

  var size = {
    width: $doc.width(),
    height: $doc.height()
  };

  var game = oaky.createGame({
    size: size,
    canvas: canvas,
    canvasStatic: canvasStatic
  });

  game.camera = require('./entities/camera')(game);

  function updateCameraSize() {
    game.size = {
      width: $doc.width(),
      height: $doc.height()
    };

    $('.game-ctn')
      .add('.main')
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

  var player = require('./entities/person')(game);
  player = require('./entities/player')(game, player);

  game.player = player;

  game.walkLine = require('./entities/walkLine')(game);

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
      game.walkLine.set('walkStartingPoint', e);
      game.walkLine.set('target', e);
    }).on('slide', function(e){
      if(game.walkLine.has('position')){
        game.walkLine.set('target', e);
      }
    }).on('slide:end', function(){
      if(game.walkLine.has('target')){
        game.player.set('target', game.walkLine.get('target'));
      }
      game.walkLine.remove('walkStartingPoint');
      game.walkLine.remove('position');
    });

  game.start();

  game.on("after:destroy", function(){
    controls.off();
  });

};
