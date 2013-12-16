
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

  obstacles : [
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
    type: "table"
  },
  { // mesa derecha 2
    x:1431,
    y:220,
    w:1711 - 1431,
    h:624 - 220,
    type: "table"
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

  npcs: [
  {
    x: 1000,
    y: 750,   
  },
  {
    x: 1500,
    y: 750,   
  },
  {
    x: 1500,
    y: 1200,   
  },
  {
    x: 1800,
    y: 250,
    npc: { rest: [12, 20]},
    skin: 6
  },

  // chicas del final:
  {
    x: 1650,
    y: 2650,
    npc: false,
    skin: 6
  },
  {
    x: 1800,
    y: 2650,
    npc: false,
    skin: 2
  },
  {
    x: 1650,
    y: 2800,
    npc: false,
    skin: 4
  },
  {
    x: 1800,
    y: 2800,
    npc: false,
    skin: 4
  }],

  objetive : {
    x: 1700,
    y: 2700,
    r: 160
  },


  player: {
    x: 130,
    y: 770,
    speed: 7
  }
};