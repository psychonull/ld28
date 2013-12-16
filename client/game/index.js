
var loader = require('./loader');
var builder = require('./builder');
var Controls = require('./controls/mouse');

$(function(){

  window.mumps = {
    repository: require('./repository'),
    //sounds: require('./sounds'),
    settings: require('./settings'),
    Controls: Controls,
    helpers: require("./helpers"),
    manager: require('./manager')
  };

  mumps.manager.showLoadingScreen();
  
  loader
    .initResources(
      mumps.settings.images/*, 
      mumps.settings.sounds*/
    )
    .on('error', function(err){
      window.console.log(err);
    })
    .on('report', function(prg){
      mumps.manager.loadProgress(prg); 
    })
    .on('complete', function(){
      $("#loading .play").show();
    })
    .load();

  $("#loading .play").on("click", function(){
    mumps.game = builder;
    mumps.manager.loadComplete();
    //mumps._current = mumps.game(5);
    mumps.manager.showChapterPresentation(1);
    mumps.finished = function(){
      mumps._current.stop();
      mumps.manager.show(mumps._current);
    };
  });

  $(mumps.manager).on('advancelevel', function(e, levelNbr){
    if(mumps._current){
      mumps._current.destroy();
    }
    mumps._current = mumps.game(levelNbr);
  });
});
