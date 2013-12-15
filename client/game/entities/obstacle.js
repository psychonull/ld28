
module.exports = function(game, data){
  
  var obstacle = game.entities.make();

  obstacle.add("position", {
    x: data.x,
    y: data.y
  });

  obstacle.add("size", {
    width: data.w,
    height: data.h
  });
  
  obstacle.add("scale", { x: 1, y: 1 });
  obstacle.add("mass", 1000);

  obstacle.add("boundary", {
    min: {
      x: 0,
      y: 0
    },
    max: {
      x: mumps.settings.worldSize.w,
      y: mumps.settings.worldSize.h
    }
  });

  if (!data.type || !data.spriteSheet){
    obstacle.add("display", {
      type: "rect",

      x: 0,
      y: 0,
      width: data.w,
      height: data.h,
      fill: "black"
    });
  }
  else {
    obstacle.add("display", {
      type: "sprite",
      
      x: 0,
      y: 0,
      width: data.w,
      height: data.h,

      sheet: data.spriteSheet,
      animation: data.type,
      index: 0
    });
  }

  obstacle.add("dynamic");
  obstacle.add('obstacle');
  obstacle.add("zindex", 1);

  return obstacle;
};
