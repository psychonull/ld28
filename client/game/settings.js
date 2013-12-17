
module.exports = {
    debug: false

  , worldSize: {
      w: 2000, 
      h: 2000
    }

  , images: {
    "chapter_bg": "images/chapter_bg.png",
    "guide": "images/guide.gif",
    "person": "images/person.png",
    "bar": "images/bar.png",
    "bar_floor": "images/bar_floor.png",
    "street": "images/street.png",
    "street_floor": "images/street_bg.png",
    "hud": "images/face.png",
  }

  , infection: {
      initialInfections: 1,
      maxExposureTime: 1,
      exposureCooldown: 3,
      contagionRadius: 150,
      contagionPower: 2,
    }

  , defaultPersonSpeed: 1.5
  , defaultNPCRest: [0, 1]
  
  , soundsUrl: "sounds"

  , sounds: { 
    "music_bar": {
        file: "Abstraction_LD28_FirstTrack" 
      , volume: 0.3 // 0.0 to 1.0 (defaults to 0.5)
    },
    "music_street": {
        file: "Abstraction_LD28_SecondTrack" 
      , volume: 0.3
    },
    "music_bar2": {
        file: "Abstraction_LD28_EighthTrack" 
      , volume: 0.3
    }
    
  }

};
