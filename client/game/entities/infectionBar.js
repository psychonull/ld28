
module.exports = function(game){
  
  var infectionBar = game.entities.make();

  infectionBar.add("position", {
    x: 10,
    y: 10
  });

  infectionBar.add("display", {
    type: "sprite",
    
    x: 0,
    y: 0,
    width: 250,
    height: 250,

    sheet: "hud",
    animation: "infection_bar1",
    index: 0,
    loop: false,
    frameTime: 200

  });

  infectionBar.add("playerStatus");
  infectionBar.add("static");

  return infectionBar;
};
