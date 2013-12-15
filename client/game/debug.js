module.exports = {
	activate: function(game){
		$('textarea').show();
    console.log(game);
    game.controls.on('slide', function(e){
      $('textarea').text(JSON.stringify(e));
    });
	}


};