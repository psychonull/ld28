module.exports = {
  activate: function(game){
    $('textarea').show();
      game.controls.on('slide', function(e){
        var pos = {
          x: e.x + mumps._current.camera.get("position").x,
          y: e.y + mumps._current.camera.get("position").y
        };
        
        $('textarea').text(JSON.stringify(pos));
      });
  }
};