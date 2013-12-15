
module.exports = function(game){
  var walkLine = game.entities.make();
  
  walkLine.add("size", 'TODO: remove this');

  walkLine.add("display", { 
    type: 'line',
    color: '#F00',
    width: 3,
    hidden: false
  });

  walkLine.add('walkControl');
  walkLine.add("dynamic");
  walkLine.add("zindex", 3);

  return walkLine;
};
