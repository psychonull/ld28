
module.exports = {
  worldSize: {
    w: 2000, 
    h: 2000
  },

  obstacles : [{
    x: 250,
    y: 0,
    w: 50,
    h: 180
  }, {
    x: 800,
    y: 0,
    w: 50,
    h: 180
  }, {
    x: 400,
    y: 250,
    w: 100,
    h: 100
  }, {
    x: 1000,
    y: 250,
    w: 100,
    h: 100
  },{
    x: 300,
    y: 500,
    w: 60,
    h: 60
  }, {
    x: 700,
    y: 500,
    w: 60,
    h: 60
  }, {
    x: 1200,
    y: 500,
    w: 60,
    h: 60
  }],

  objetive : {
    x: 800,
    y: 250,
    r: 100
  },

  npcs: [{
    x: 350,
    y: 0,
    w: 50,
    h: 180,
    contagionFocus: {
      radius: 100,
      power: 1
    }
  }, {
    x: 200,
    y: 30,
    w: 50,
    h: 180
  }, {
    x: 478,
    y: 350,
    w: 100,
    h: 100
  }],

  player: {
    x: 350,
    y: 200,
  }
};