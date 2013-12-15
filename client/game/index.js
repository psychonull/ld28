
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

  loader
    .initResources(
      mumps.settings.images/*, 
      mumps.settings.sounds*/
    )
    .on('error', function(err){
      window.console.log(err);
    })
    .on('report', function(prg){
      window.console.log('LOADING > ' + prg);
    })
    .on('complete', function(){
      mumps.game = builder;
      mumps._current = mumps.game(1);
      //mumps.manager = require('./manager')();
      mumps.finished = function(){
        mumps._current.stop();
        mumps.manager.show(mumps._current);
      };
    })
    .load();

  $(mumps.manager).on('advancelevel', function(e, levelNbr){
    mumps._current.destroy();
    mumps._current = mumps.game(levelNbr);
  });
});
