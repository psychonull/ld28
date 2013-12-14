
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
    /*.on('aim', function(position){
      game.aim.set('position', position);
    })*/
    .on('propelling:on', function(){
      game.player.add("propelling");
    })
    .on('propelling:off', function(){
      game.player.remove("propelling");
    })
    .on('gun:on', function(){
      game.player.add("firing");
    })
    .on('gun:off', function(){
      game.player.remove("firing");
    });

  game.start();

  game.on("after:destroy", function(){
    controls
      .off('pause')
      .off('aim')
      .off('propelling:on')
      .off('propelling:off')
      .off('gun:on')
      .off('gun:off');
  });

};
