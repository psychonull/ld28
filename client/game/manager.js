var border = 10;
var dataIndex = require('./data/index.js');

module.exports = {

  show: function(game/*, extra*/){
    var self = this;
    if (!dataIndex[game.level+1] || dataIndex[game.level].music !== dataIndex[game.level+1].music){
      mumps.sounds.stop(dataIndex[game.level].music, 3000);
    }

    $("#cinema .state").html(this.getCinemaHTML(game.level));
    $("#cinema").show();

    $(".next", "#cinema").on("click", function(){
          $("#cinema").hide();
          self.showChapterPresentation(game.level + 1);
        });
  },

  clear: function(){
    $('#cinema .state').empty();
  },

  showGuide: function(){
    $('#loading').hide();
    $('#guide').show();
  },

  showGame: function(){
    $('#guide').hide();
    $('canvas').show();
    $("#sound").show();

    $("#sound").on("click", function(){
      if ($(this).hasClass("on")){
        mumps.sounds.muteAll();
        $(this).removeClass("on").addClass("off");
      }
      else {
        mumps.sounds.unmuteAll();
        $(this).removeClass("off").addClass("on");
      }
    });
  },

  showLoadingScreen: function(){
    $("#loading, #guide").height($(window).height()-border);
    $("#loading, #guide, .main").width($(window).width()-border);

    $("canvas").hide();
    $("#loading").show();
  },

  loadProgress: function(prg){
    $("#prg", "#loading").css("width", prg + "%");
  },

  showChapterPresentation: function(nbr){
    var self = this;
    var chapters = {
      "1": "Revelations",
      "2": "Realization",
      "3": "Panic",
      "4": "Perseverance",
      "5": "Reunion"
    };

    $("canvas").hide();

    if (nbr >= 6){
      $("#chapter h1").text("THE END");
      $("#chapter h2").text("You have safetly survived to the mumps infection ... so far");
      $("#chapter a.continue").text("Restart");
    }
    else {
      $("#chapter h1").text("CHAPTER " + nbr);
      $("#chapter h2").text(chapters[nbr]);
      $("#chapter a.continue").text("Continue >");

      if (nbr === 1 || (dataIndex[nbr].music !== dataIndex[nbr-1].music)){
        mumps.sounds.play(dataIndex[nbr].music, 3000, true);
      }
    }

    $("#chapter").height($(window).height()-border);
    $("#chapter, .main").width($(window).width()-border);
    $("#chapter").show();

    $("#chapter a.continue").on("click", function(){
      $("canvas").show();
      $("#chapter").hide();
      if (nbr >= 6){
        $(self).trigger('advancelevel', 1);
      }
      else {
        $(self).trigger('advancelevel', nbr);
      }
    });
  },

  getCinemaHTML: function(level){
    var html = {
      "1": ["<p>Why the heck she is not here? What does this note mean?:</p>", 
          " <quote><p>Chimataru: I still don't understand why you keep doing always the same thing.</p>",
          " <p>Plus these strange mumps keep propagating in this sh***y town. I don't feel like sitting",
          " here for you. I went out with the girls into another bar. </p></quote> <p>Signed - lilita</p>"].join(''),
      "2": ["<p>I felt strange for a bit. </p><p>I'm starting to think ",
          " these mumps are not yet another media invention.</p>",
          "<p>If all of this is really happening I want to be with her.</p>",
          "<p>I know this is my last chance</p>"].join(''),
      "3": ["<p><label>Chimataru:</label><span>hey, why are you blocking the street?</span></p>",
          "<p><label>Unknown human:</label><span>I won't let them come. The mumps are contagious and stronger in the other side</span></p>",
          "<p><label>Chimataru:</label><span>I don't care. Goodbye sir</span></p>"],
      "4": ["<p>People is not being polite. Not at all. They keep pushing me.</p> <p>However, I feel ready for this.</p>"],
      "5": ["<p><label>Chimataru:</label><span>I've made impossible things to get to you.</span></p>",
           "<p><label>Lilita:</label><span>I'm really sorry. I regret those silly discussions and life-wasting angry moments.</span></p>",
           "<p>Just let's enjoy. <b>You only get one life.</b></p>" ]
    };

    return html[level];
  },

  showGameOver: function(level){
    var self = this;
    $('#gameover').show();
    $('.retry', "#gameover").on("click", function(){
      $('#gameover').hide();
      $(self).trigger('advancelevel', level);
    });
  }


};

