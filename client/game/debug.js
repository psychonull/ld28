module.exports = {
  activate: function(game){
    $('textarea').show();
      game.controls.on('slide', function(e){
        $('textarea').text(JSON.stringify(e));
      });
  }


};