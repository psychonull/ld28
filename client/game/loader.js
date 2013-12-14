
var events = {
    complete: function(){}
  , report: function(){}
  , error: function(){}
};

var totalImages = 0;
//var totalSounds = 0;
var completed = false;

function checkComplete() {
  if (!completed && totalImages >= 100 /*&& totalSounds >= 50*/){
    completed = true;
    events.complete();
  }
}

function reportProgress(){
  events.report(totalImages/* + totalSounds*/);
}

module.exports = {
  initResources: function(images/*, sounds*/){

    mumps.repository
      .addResources(images)
      .on('error', events.error)
      .on('report', function(prg){
        //totalImages = prg/2;
        totalImages = prg;
        reportProgress();
        checkComplete();
      })
      .on('complete', checkComplete);
/*
    mumps.sounds
      .addSounds(sounds)
      .on('error', events.error)
      .on('report', function(prg){
        totalSounds = prg/2;
        reportProgress();
        checkComplete();
      })
      .on('complete', checkComplete);    
*/
    return this;
  },

  on: function(eventName, callback){
    if (events[eventName]) {
      events[eventName] = callback;
    }
    return this;
  },

  load: function(){
    mumps.repository.load();
    //mumps.sounds.load(mumps.settings.soundsUrl);
  }
};

