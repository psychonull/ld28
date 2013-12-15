
module.exports = {
  worldSize: {
    w: 1000, 
    h: 1400
  },

  obstacles : [{
    x: 0,
    y: 0,
    w: 172,
    h: 600,
    type: "barra"
  }/*, {
    x: 0,
    y: 0,
    w: 27,
    h: 1400
  }*/, {
    x: 0,
    y: 762,
    w: 339,
    h: 871 - 762,
    type: "stand_table"
  }, {
    x: 0,
    y: 1047,
    w: 253,
    h: 1400 - 1047
  },{
    x: 0,
    y: 1366,
    w: 460,
    h: 1400 - 1366
  }, {
    x: 648,
    y: 1221,
    w: 1000 - 648,
    h: 1400 - 1221
  }/*, {
    x: 969,
    y: 0,
    w: 1000 - 969,
    h: 1400
  }*/, {
    x: 738,
    y: 846,
    w: 1000 - 738,
    h: 990 - 846,
    type: "table"
  }, {
    x: 733,
    y: 493,
    w: 1000 - 733,
    h: 642 - 493,
    type: "table"
  }, {
    x: 824,
    y: 0,
    w: 1000 - 824,
    h: 240,
    type: "table"
  }, {
    x: 315,
    y: 211,
    w: 662 - 315,
    h: 360 - 211,
    type: "table"
  }/*, {
    x: 0,
    y: 0,
    w: 1000,
    h: 20
  }*/],

  objetive : {
    x: 885,
    y: 154,
    r: 100
  },

  npcs: [{
    x: 531,
    y: 934
  }, {
    x: 265,
    y: 100
  }],

  player: {
    x: 550,
    y: 1345,
    speed: 5
  }
};