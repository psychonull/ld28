
var loader = require('./loader');
var builder = require('./builder');
var Controls = require('./controls/keyboard');

$(function(){

  window.mumps = {
    repository: require('./repository'),
    //sounds: require('./sounds'),
    settings: require('./settings'),
    Controls: Controls,
    helpers: require("./helpers")
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
      mumps.game();
    })
    .load();

});
