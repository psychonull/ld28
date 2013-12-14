
module.exports = function(game){
  var walkLine = game.entities.make();
  
  walkLine.add("dynamic");
  walkLine.add("size", 'TODO: remove this');

  walkLine.add("display", { 
    type: 'line',
    color: '#F00',
    width: 3,
    hidden: false
  });

  walkLine.add('walkControl');

  return walkLine;
};
