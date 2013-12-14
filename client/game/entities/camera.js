
module.exports = function(game){
  
  var camera = game.entities.make();

  camera.add("position", { x: 0, y: 0 });
  camera.add("size", { width: game.size.width, height: game.size.height });

  camera.add('camera');
  camera.set('bg', {
    x: 0,
    y: 0
  });

  return camera;
};
