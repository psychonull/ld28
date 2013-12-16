
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
  music: "music_bar2",

  obstacles : [
  {  //pasillo puerta
    x: 0,
    y: 0,
    w: 552,
    h: 705
  },
  {  // puerta entrada
    x:180,
    y:670,
    w: 350 - 160,
    h: 720 - 670
  },
  { // mesa derecha 1
    x:835,
    y:226,
    w: 125,
    h: 335,
    type: "stand_table_vertical"
  },
  { // mesa derecha 1 MEDIO
    x:1150,
    y:226,
    w: 125,
    h: 335,
    type: "stand_table_vertical"
  },
  { // mesa derecha 2
    x:1431,
    y:220,
    w: 125,
    h: 335,
    type: "stand_table_vertical"
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
  { // mesa derecha 5
    x:790,
    y:1330,
    w:250,
    h:250,
    type: "table"
  },
  { // mesa derecha 6
    x:1374,
    y:1330,
    w:250,
    h:250,
    type: "table"
  },
  { // mesa abajo antes bloque
    x:200,
    y:1160,
    w: 190,
    h: 380,
    type: "table_vertical"
  },
  /*{ //barra 1
    x:610,
    y:1400,
    w:WORLD.w - 610,
    h:1710 - 1400,
    type: "barra"
  },*/
  { // separador
    x:0,
    y:1720,
    w:WORLD.w - 366,
    h:2112 - 1720
  },
  /*{ // barra
    x:582,
    y:2122,
    w:WORLD.w - 582,
    h:2320 - 2122,
    type: "barra"
  }*/

  //abajo

  { // mesa derecha a minas
    x:500,
    y:2650,
    w: 125,
    h: 335,
    type: "stand_table_vertical"
  },
  { // mesa derecha a minas (vertical 1)
    x: 500,
    y: 2500,
    w: 335,
    h: 125,
    type: "stand_table"
  },
  { // mesa derecha a minas (vertical 2)
    x: 850,
    y: 2500,
    w: 335,
    h: 125,
    type: "stand_table"
  },
  { // mesa cuadrada el ppio
    x:1350,
    y:2120,
    w:250,
    h:250,
    type: "table"
  },

  ],

  npcs: [
  { // body guards
    x: 60,
    y: 700,
    skin: 5,
    npc: false,
    contagionFocus: {
      radius: 220,
      power: 0.1
    },
    angle: 1.5
  },
  {
    x: 400,
    y: 700,
    skin: 5,
    npc: false,
    angle: 1.5
  },

  //arriba
  {
    x:1000,
    y:60,
    npc: {
      rest: [1,3]
    },
    contagionFocus: {
      radius: 100,
      power: 0.3
    },
    skin: 1
  },
  {
    x:1500,
    y:60,
    npc: {
      rest: [1,7]
    },
    skin: 2
  },

  {
    x: 650,
    y: 300,
    npc: {
      rest: [1,3]
    },
    skin: 5
  },
  {
    x: 750,
    y: 560,
    npc: {
      rest: [1,3]
    },
    skin: 3
  },
  {
    x: 1000,
    y: 750,
    npc: {
      rest: [1,3]
    },
    contagionFocus: {
      radius: 150,
      power: 0.3
    },
    skin: 1
  },
  {
    x: 1250,
    y: 560,
    npc: {
      rest: [1,3]
    },
    skin: 5
  },
  {
    x: 1500,
    y: 750,
    npc: {
      rest: [1,3]
    },
    skin: 4
  },
  {
    x: 1700,
    y: 560,
    npc: {
      rest: [1,3]
    },
    contagionFocus: {
      radius: 150,
      power: 0.3
    },
    skin: 3   
  },
  {
    x: 1500,
    y: 1200,
    npc: {
      rest: [1,3]
    },
    contagionFocus: {
      radius: 150,
      power: 0.3
    },
    skin: 4
  },
  {
    x: 1000,
    y: 1200,
    npc: {
      rest: [1,3]
    },
    skin: 3
  },
  {
    x: 600,
    y: 1200,
    npc: {
      rest: [1,5]
    },
    contagionFocus: {
      radius: 150,
      power: 0.3
    },
    skin: 5
  },
  {
    x: 550,
    y: 1500,
    npc: {
      rest: [1,3]
    },
    skin: 1
  },
  {
    x: 70,
    y: 1350,
    npc: {
      rest: [1,5]
    },
    skin: 2
  },
  {
    x: 1800,
    y: 250,
    npc: { rest: [12, 20]},
    skin: 1
  },

  // medio
  {
    x:1750,
    y:1800,
    boundary: {
      min: {
        x: 1600,
        y: 1600
      },
      max: {
        x: 2000,
        y: 2300
      }
    },
    npc: {
      rest: [1,3]
    },
    contagionFocus: {
      radius: 150,
      power: 0.2
    },
    skin: 1
  },
  {
    x:1800,
    y:2000,
    boundary: {
      min: {
        x: 1600,
        y: 1600
      },
      max: {
        x: 2000,
        y: 2300
      }
    },
    npc: {
      rest: [1,5]
    },
    skin: 1
  },

  //abajo

  {
    x:150,
    y:2250,
    boundary: {
      min: {
        x: 1,
        y: 2000
      },
      max: {
        x: 450,
        y: 2600
      }
    },
    npc: {
      rest: [1,3]
    },
    contagionFocus: {
      radius: 250,
      power: 0.5
    },
    skin: 1
  },
  {
    x:700,
    y:2350,
    boundary: {
      min: {
        x: 450,
        y: 2000
      },
      max: {
        x: 1200,
        y: 2600
      }
    },
    npc: {
      rest: [1,5]
    },
    contagionFocus: {
      radius: 130,
      power: 0.3
    },
    skin: 3
  },
  {
    x:1150,
    y:2200,
    boundary: {
      min: {
        x: 600,
        y: 2000
      },
      max: {
        x: 1400,
        y: 2500
      }
    },
    npc: {
      rest: [1,3]
    },
    skin: 5
  },

  // right bottom corner
  {
    x:1250,
    y:2800,
    boundary: {
      min: {
        x: 850,
        y: 2500
      },
      max: {
        x: 1800,
        y: 3000
      }
    },
    npc: {
      rest: [1,5]
    },
    skin: 1
  },
  {
    x:1700,
    y:2600,
    boundary: {
      min: {
        x: 1400,
        y: 2300
      },
      max: {
        x: 2000,
        y: 3000
      }
    },
    npc: {
      rest: [1,5]
    },
    contagionFocus: {
      radius: 250,
      power: 0.3
    },
    skin: 5
  },

  // chicas del final:
  {
    x: 130,
    y: 2650,
    npc: false,
    skin: 6,
    inmune: true,
    angle: 1
  },
  {
    x: 270,
    y: 2650,
    npc: false,
    skin: 2,
    inmune: true,
    angle: -4
  },
  {
    x: 130,
    y: 2770,
    npc: false,
    skin: 4,
    inmune: true,
    angle: -1
  },
  {
    x: 270,
    y: 2770,
    npc: false,
    skin: 4,
    inmune: true,
    angle: -2
  }],

  objetive : {
    x: 230,
    y: 2780,
    r: 200
  },


  player: {
    //x:350,
    //y:2200,

    x: 200,
    y: 770,

    speed: 7,
    angle: 0.5
  }
};