
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
  music: "music_street",

  obstacles : [{
    x: 0,
    y: WORLD.h - 40,
    w: WORLD.w,
    h: 50
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
    x:600,
    y:200,
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
  },
  { // tacho
    x:600,
    y:696,
    w:200,
    h:70,
    type: "trash"
  }
  ],

  npcs: [
  {
    x: 1800,
    y: 350,
    npc: false,
    skin: 1,
    inmune: true,
    angle: 3
  },
  {
    x: 700,
    y: 500,
    npc: {rest: [1, 3]},
    skin: 3,
    inmune: true,
    speed: 3
  },
  {
    x: 400,
    y: 700,
    npc: {rest: [5, 8]},
    skin: 2,
    inmune: true,
    speed: 10,
    contagionFocus: {
      radius: 130,
      power: 1
    }
  },
  {
    x: 900,
    y: 700,
    npc: {rest: [5, 8]},
    skin: 2,
    inmune: true,
    speed: 10,
    contagionFocus: {
      radius: 130,
      power: 1
    }
  },
  {
    x: 1100,
    y: 200,
    npc: {rest: [1, 3]},
    skin: 5,
    inmune: true,
    speed: 4,
    boundary: {
      min: {
        x:1000,y:30
      },
      max: {
        x:1600,y:800
      }
    },
    contagionFocus: {
      radius: 200,
      power: 0.4
    }
  },
  {
    x: 1200,
    y: 500,
    npc: {rest: [1, 3]},
    skin: 5,
    inmune: true,
    speed: 4,
    boundary: {
      min: {
        x:1000,y:30
      },
      max: {
        x:1600,y:800
      }
    }
  },
  {
    x: 1700,
    y: 200,
    npc: {rest: [0.5, 6]},
    skin: 5,
    speed: 3,
    boundary: {
      min: {
        x:1300,y:30
      },
      max: {
        x:1800,y:300
      }
    },
    contagionFocus: {
      radius: 200,
      power: 0.5
    }
  }
  ],

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