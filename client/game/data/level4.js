
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
    x: 1615,
    y: 876,
    w: 450,
    h: 140,
    type: "awning_upsidedown"
  },
  { // barrera
    x: 10,
    y: 100,
    w: 40,
    h: WORLD.h - 100
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
    y:502,
    w:283,
    h:186,
    type: "trash"
  },
  { // tacho 
    x:1037,
    y:183,
    w:120,
    h:220,
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