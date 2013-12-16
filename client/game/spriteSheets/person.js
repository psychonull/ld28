
module.exports = function(){
  var w = 100, h = 150;

  var sp = {
    resource: "person",
    animations: {}
  };

  for (var i=0; i<=6; i++){
    sp.animations["idle_" + i] = [{
      x: 0,
      y: h*i,
      w: w,
      h: h
    }];

    sp.animations["walking_" + i] = [];

    for (var j=1; j<=5; j++){
      if (j === 3) { continue; }

      sp.animations["walking_" + i].push({
        x: w*j,
        y: h*i,
        w: w,
        h: h
      });
    }
  }

  return sp;
};
