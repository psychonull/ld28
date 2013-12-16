
module.exports = {
    debug: false

  , worldSize: {
      w: 2000, 
      h: 2000
    }

  , images: {
    "person": "images/person.png",
    "bar": "images/bar.png",
    "bar_floor": "images/bar_floor.png",
    "street": "images/street.png",
    "street_floor": "images/street_bg.png",
    "hud": "images/face.png"
  }

  , infection: {
      initialInfections: 1,
      maxExposureTime: 1,
      exposureCooldown: 3,
      contagionRadius: 150,
      contagionPower: 0.5,
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
