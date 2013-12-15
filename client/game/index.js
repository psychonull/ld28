
var loader = require('./loader');
var builder = require('./builder');
var Controls = require('./controls/mouse');

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
      mumps._current = mumps.game(3);
      mumps.manager = require('./manager')(mumps._current);
      mumps.finished = function(){
        mumps._current.stop();
        $("#cinema").show();
        $(".next", "#cinema").on("click", function(){
          mumps._current.destroy();
          $("#cinema").hide();
          mumps._current = mumps.game(mumps._current.level + 1);
        });
      };
    })
    .load();

});
