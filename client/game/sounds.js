
module.exports = (function(){
  var sounds = {}
    , loaded = 0
    , getCount = function(){
        return Object.keys(sounds).length;
      };
  
  var events = {
      complete: function(){}
    , report: function(){}
    , error: function(){}
  };

  function soundLoaded() {
    var current = getCount();
    var prg = (++loaded * 100) / current;

    if (loaded <= current){
      events.report(prg);

      if (prg >= 100) { 
        events.complete();
      }
    }
  }
  
  function soundFailed(evt, etc){
    events.error(evt, etc);
    soundLoaded();
  }

  function createSound(sound, url){
    var options = _.clone(sounds[sound]);
    var formats = options.formats || ["mp3", "ogg", "wav"];

    var urls = _.map(formats, function(ext){
      return url + '/' + options.file + '.' + ext;
    });

    sounds[sound] = new Howl({
      urls: urls,
      buffer: true,
      autoplay: false,
      volume: options.volume || 0.5,
      onload: soundLoaded,
      onloaderror: soundFailed
    });
  }

  return {
    on: function(eventName, callback){
      if (events[eventName]) {
        events[eventName] = callback;
      }
      return this;
    },
    
    load: function(url){
      loaded = 0;
      for (var sound in sounds) {
        if (sounds.hasOwnProperty(sound)){
          createSound(sound, url);          
        }
      }
      return this;
    },
    
    addSounds: function(newSound){
      for(var s in newSound){
        if (newSound.hasOwnProperty(s)){
          if (sounds.hasOwnProperty(s)) {
            throw 'The sound ' + s + ' already exists.';
          }
          sounds[s] = newSound[s];
        }
      }
      return this;
    },

    play: function(sound, fadeDuration, loop){
      if (sounds[sound]){
        if (loop){
          sounds[sound].loop(true);
        }

        if (fadeDuration){
          sounds[sound].fadeIn(sounds[sound].volume(), fadeDuration);
        }
        else {
          sounds[sound].play(); 
        }
      }
    },

    stop: function(sound, fadeDuration){
      if (sounds[sound]){
        if (fadeDuration){
          sounds[sound].fadeOut(0, fadeDuration);
        }
        else {
          sounds[sound].stop(); 
        }
      }
    },

    muteAll: function(){
      Howler.mute();
    },

    unmuteAll: function(){
      Howler.unmute();
    },

    setVolume: function(value){
      Howler.volume(value);
    }

  };
  
})();