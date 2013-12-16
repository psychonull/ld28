
module.exports = {

  show: function(game/*, extra*/){
    var self = this;
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

  loadComplete: function(){
    $('#loading').hide();
    $('canvas').show();
  },

  showLoadingScreen: function(){
    $("canvas").hide();
    $("#loading").show();
  },

  loadProgress: function(prg){
    $("#prg, #loading").text(prg);
  },

  showChapterPresentation: function(nbr){
    var self = this;
    var chapters = {
      "1": "Chapter 1: Revelations",
      "2": "Chapter 2: Realization",
      "3": "Chapter 3: Panic",
      "4": "Chapter 4: Perseverance",
      "5": "Chapter 5: Reunion"
    };
    $("canvas").hide();
    $("#chapter h1").text(chapters[nbr]);
    $("#chapter").height($(window).height());
    $("#chapter").width($(window).width());
    $("#chapter").show();
    $("#chapter a.continue").on("click", function(){
      $("canvas").show();
      $("#chapter").hide();
      $(self).trigger('advancelevel', nbr);
    });
  },

  getCinemaHTML: function(level){
    var html = {
      "1": ["Why the heck she is not here? What does this note mean?:", 
          " <quote>Chimataru: I still don't understand why you keep doing always the same thing.",
          " Plus these strange mumps keep propagating in this sh***y town. I don't feel like sitting",
          " here for you. I went with the girls. </quote> Signed - lilita"].join(''),
      "2": ["I felt strange for a bit. I'm starting to think that ",
          " these mumps are not yet another media invention.",
          "</br>If all of this is really happening, I want to be with her.",
          "I know this is my last chance"].join(''),
      "3": ["Chimataru: hey, why are you blocking the street?</br>",
          "Unknown human: I won't let them come. The mumps are contagious and stronger in the other side </br>",
          "Chimataru: I don't care. Goodbye sir"],
      "4": ["The people is not being polite. Not at all. They keep pushing me. However, I feel ready for this."],
      "5": ["Chimataru: I made impossible things to get to you.</br>",
           "Lilita: I'm really sorry. I regret those silly discussions and life-wasting Angry moments.",
           "Just let's enjoy. <b>You only get one life.</b>" ]
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

