
var WORLD = {
  w: 2000,
  h: 3000
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
    h: 16,
  }, // fin paredes
  {  //pasillo puerta
    x: 0,
    y: 0,
    w: 552,
    h: 705
  },
  {  // puerta entrada
    x:100,
    y:670,
    w: 350 - 100,
    h: 720 - 670
  },
  { // mesa derecha 1
    x:835,
    y:226,
    w:1125 - 835,
    h:612 - 226,
    type: "stand_table"
  },
  { // mesa derecha 2
    x:1431,
    y:220,
    w:1711 - 1431,
    h:624 - 220,
    type: "stand_table"
  },
  { // mesa derecha 3
    x:790,
    y:905,
    w:250,
    h:250,
    type: "table"
  },
  { // mesa derecha 4
    x:1374,
    y:910,
    w:250,
    h:250,
    type: "table"
  },
  { //barra 1
    x:610,
    y:1400,
    w:WORLD.w - 610,
    h:1710 - 1400,
    type: "barra"
  },
  { // separador
    x:366,
    y:1720,
    w:WORLD.w - 366,
    h:2112 - 1720
  },
  { // barra
    x:582,
    y:2122,
    w:WORLD.w - 582,
    h:2320 - 2122,
    type: "barra"
  }
  ],

  npcs: [{
    x: 1650,
    y: 2650,
    npc: false
  },
  {
    x: 1800,
    y: 2650,
    npc: false
  },
  {
    x: 1650,
    y: 2800,
    npc: false
  },
  {
    x: 1800,
    y: 2800,
    npc: false
  }],

  objetive : {
    x: 1700,
    y: 2700,
    r: 160
  },


  player: {
    x: 130,
    y: 770,
    speed: 5
  }
};