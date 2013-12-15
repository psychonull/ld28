
module.exports = {
    debug: false

  , worldSize: {
      w: 2000, 
      h: 2000
    }

  , images: {
    "person": "images/person.png",
    "bar": "images/bar.png",
    "bar_floor": "images/bar_floor.png"
  }

  , infection: {
      initialInfections: 1,
      maxExposureTime: 1,
      exposureCooldown: 3,
      contagionRadius: 100,
      contagionPower: 1,
    }

  , defaultPersonSpeed: 1.5
  , defaultNPCRest: [0, 1]
  
  
/*
  , soundsUrl: "sounds"
  , sounds: { 
    "x": {
      file: "blop_1"
    }
  }
*/
};
