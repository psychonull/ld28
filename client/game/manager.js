
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
      "1": "Revelations",
      "2": "Realization",
      "3": "Panic",
      "4": "Perseverance",
      "5": "Reunion"
    };
    $("canvas").hide();
    $("#chapter h1").text("CHAPTER " + nbr);
    $("#chapter h2").text(chapters[nbr]);
    $("#chapter").height($(window).height());
    $("#chapter, .main").width($(window).width());
    $("#chapter").show();
    $("#chapter a.continue").on("click", function(){
      $("canvas").show();
      $("#chapter").hide();
      $(self).trigger('advancelevel', nbr);
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
  }


};

