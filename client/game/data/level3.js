
var WORLD = {
  w: 2000,
  h: 1000
};

module.exports = {
  worldSize: {
    w: WORLD.w, 
    h: WORLD.h
  },
  spriteSheet: "bar",

  obstacles : [{
    x: 0,
    y: 0,
    w: WORLD.w,
    h: 16,
  },
  {
    x: 0,
    y: 0,
    w: 16,
    h: WORLD.h,
  },
  {
    x: WORLD.w - 16,
    y: 0,
    w: 16,
    h: WORLD.h,
  },
  {
    x: 0,
    y: WORLD.h - 16,
    w: WORLD.w,
    h: 16
  }, // fin paredes
  { // techito
    x: 0,
    y: 0,
    w: 450,
    h: 140
  },
  { // barrera
    x: 1914,
    y: 100,
    w: WORLD.w - 1914,
    h: WORLD.h - 100
  },
  { // auto
    x:382,
    y:334,
    w:429,
    h:171
  },
  { // tacho
    x:1164,
    y:696,
    w:283,
    h:186
  }
  ],

  npcs: [
  {
    x: 1800,
    y: 350,
    npc: false,
    angle: 90
  }],

  objetive : {
    x: 1850,
    y: 400,
    r: 160
  },


  player: {
    x: 160,
    y: 250,
    speed: 10
  }
};