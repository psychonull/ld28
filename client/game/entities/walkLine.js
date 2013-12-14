
module.exports = function(game){
  var walkLine = game.entities.make();
  
  walkLine.add("position", { x: 0, y: 0});
  walkLine.add("target", { x: 0, y: 0 });

  walkLine.add("dynamic");
  walkLine.add("size", 'TODO: remove this');

  walkLine.add("display", { 
    type: 'line',
    color: '#F00',
    width: 3,
    hidden: true
  });

  return walkLine;
};
