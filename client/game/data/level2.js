
module.exports = {
  worldSize: {
    w: 1000, 
    h: 1400
  },
  spriteSheet: "bar",

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
    x: 550,
    y: 1345,
    r: 120
  },

  npcs: [{
    x: 531,
    y: 934,
    speed: 3,
    boundary: {
      min: {
        x: 390,
        y: 800
      },
      max: {
        x: 781,
        y: 1060
      }
    },
    npc: {
      rest: [1,3]
    },
    contagionFocus: {
      radius: 150,
      power: 0.4
    }
  }, {
    x: 265,
    y: 100
  }, 
  {
    x: 319,
    y: 500
  },
  {
    x: 830,
    y: 980,
    npc: false,
    angle: 200
  },
  {
    x: 824,
    y: 752,
    npc: false,
    angle: 90
  },
  {
    x: 50,
    y: 880,
    boundary: {
      min: {
        x: 20,
        y: 800
      },
      max: {
        x: 500,
        y: 1060
      }
    }
  },
  {
    x: 50,
    y: 670,
    npc: false,
    angle: 95
  }],

  player: {
    x: 815,
    y: 230,
    speed: 5
  }
};