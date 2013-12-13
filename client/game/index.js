
var loader = require('./loader');
var builder = require('./builder');
var Controls = require('./controls/keyboard');

$(function(){

  window.ld28 = {
    repository: require('./repository'),
    //sounds: require('./sounds'),
    settings: require('./settings'),
    Controls: Controls,
    helpers: require("./helpers")
  };

  loader
    .initResources(
      ld28.settings.images/*, 
      ld28.settings.sounds*/
    )
    .on('error', function(err){
      window.console.log(err);
    })
    .on('report', function(prg){
      window.console.log('LOADING > ' + prg);
    })
    .on('complete', function(){
      ld28.game = builder;
    })
    .load();

});
