
module.exports = function(game, pos){
  
  var objetive = game.entities.make();

  objetive.add("position", pos);
  objetive.add("size", { width: 10, height: 10 });

  objetive.add("display", {
    type: "rect",

    x: 0,
    y: 0,
    width: 10,
    height: 10,

    strokeColor: "red",
    strokeWidth: 2,
    fill: "green"

  });

  objetive.add('dynamic');
  objetive.add('objetive');
  objetive.add("collision", 50);

  return objetive;
};
