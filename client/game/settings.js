
module.exports = {
    debug: false

  , worldSize: {
      w: 2000, 
      h: 2000
    }

  , images: {
    "bg": "images/bg.png",
    "person": "images/person.png"
  }

  , infection: {
      initialInfections: 1,
      maxExposureTime: 1,
      exposureCooldown: 3,
      contagionRadius: 100,
      contagionPower: 1,
    }

  , defaultPersonSpeed: 1.5

  
  
/*
  , soundsUrl: "sounds"
  , sounds: { 
    "x": {
      file: "blop_1"
    }
  }
*/
};
