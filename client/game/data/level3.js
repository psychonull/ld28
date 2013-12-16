
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
    y: 0,
    w: WORLD.w,
    h: 16
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
    h: 140,
    type: "awning"
  },
  { // barrera
    x: 1880,
    y: 20,
    w: 100,
    h: 180,
    type: "fence"
  },
  { // barrera
    x: 1880,
    y: 270,
    w: 100,
    h: 180,
    type: "fence"
  },
  { // barrera
    x: 1880,
    y: 500,
    w: 100,
    h: 180,
    type: "fence"
  },
  { // barrera
    x: 1880,
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
  { // tacho
    x:1164,
    y:696,
    w:283,
    h:186,
    type: "trash"
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