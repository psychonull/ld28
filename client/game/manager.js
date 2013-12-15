module.exports = {

	show: function(game/*, extra*/){
		var self = this;
		$("#cinema .state").text('Chapter ' + game.level);
		$("#cinema").show();

		$(".next", "#cinema").on("click", function(){
          $("#cinema").hide();
          $(self).trigger('advancelevel', game.level + 1);
        });
	},

	clear: function(){
		$('#cinema .state').empty();
	},

	showLoadingScreen: function(){
		$("#cinema").show();
		$("#cinema .state").text('Loading... please wait some time');
		$('.next', "#cinema").hide();
	}


};

