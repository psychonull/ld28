
var WORLD = {
  w: 2000,
  h: 1000
};

module.exports = {
  worldSize: {
    w: WORLD.w, 
    h: WORLD.h
  },
  spriteSheet: "street",
  background: "street_floor",

  obstacles : [{
    x: 0,
    y: WORLD.h - 40,
    w: WORLD.w,
    h: 50
  }, // fin paredes
  { // techito
    x: 1615,
    y: 850,
    w: 450,
    h: 140,
    type: "awning_upsidedown"
  },
  { // barrera
    x: 10,
    y: 20,
    w: 100,
    h: 180,
    type: "fence"
  },
  { // barrera
    x: 10,
    y: 270,
    w: 100,
    h: 180,
    type: "fence"
  },
  { // barrera
    x: 10,
    y: 500,
    w: 100,
    h: 180,
    type: "fence"
  },
  { // barrera
    x: 10,
    y: 750,
    w: 100,
    h: 180,
    type: "fence"
  },
  { // auto
    x:382,
    y:334,
    w:429,
    h:171,
    type: "car"
  },
  {
    x:1112,
    y:552,
    w:283,
    h:186,
    type: "trash"
  },
  { // tacho 
    x:1037,
    y:143,
    w:120,
    h:220,
    type: "trash"
  }
  ],

  npcs: [
  {
    x: 1800,
    y: 350,
    boundary: {
      min: {
        x: 1600,
        y: 280
      },
      max: {
        x: 2000,
        y: 1000
      }
    },
    skin: 3
  },
  {
    x:1271,
    y:355,
    npc: false,
    contagionFocus: {
      radius: 150,
      power: 0.3
    },
    angle: -0.5,
    skin: 2
  },
  {
    x:1365,
    y:158,
    skin: 4
  },
  {
    x:550,
    y:210,
    npc: {rest: [10, 20]},
    contagionFocus: {
      radius: 250,
      power: 0.2
    },
    skin: 1
  },
  {
    x:1280,
    y:80,
    npc: {rest: [2, 5]},
    boundary: {
      min: {
        x:1100,y:30
      },
      max: {
        x:2000,y:240
      }
    },
    skin: 4
  },
  {
    x:672,
    y:695,
    boundary: {
      min: {
        x:532,y:501
      },
      max: {
        x:1031,y:764
      }
    },
    skin: 5
  },
  {
    x:300,
    y:895,
    npc: { rest: [0.5, 3]},
    boundary: {
      min: {
        x:200,y:501
      },
      max: {
        x:1031,y:764
      }
    },
    contagionFocus: {
      radius: 150,
      power: 0.6
    },
    speed: 5,
    skin: 3
  }],

  objetive : {
    x: 1750,
    y: 890,
    r: 160
  },

  player: {
    x: 160,
    y: 250,
    speed: 10
  }
};