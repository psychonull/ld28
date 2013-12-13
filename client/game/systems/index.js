
module.exports = function(game){
  var systems = {};

  _.each(systems, function(sys, name){
    game.addSystem(name, sys);
  });

};
