
var Mouse = module.exports = function(options){
  this.container = options.container || window.document;

  this.events = {
      "slide:start": null
    , "slide": null
    , "slide:end": null
  };

  this.enabled = false;

  this.onSlide = this._onSlide.bind(this);
  $(this.container).on('mousemove', this.onSlide);

  this.onSlideStart = this._onSlideStart.bind(this);
  $(this.container).on('mousedown', this.onSlideStart);

  this.onSlideEnd = this._onSlideEnd.bind(this);
  $(this.container).on('mouseup', this.onSlideEnd);

  this.propelling = false;
};

function normalizeEventCoordinates(e){
  var offset = $(e.target).offset();
  return {
    x: e.pageX - offset.left,
    y: e.pageY - offset.top
  };
}

Mouse.prototype.enable = function(){
  this.enabled = true;
  return this;
};

Mouse.prototype.disable = function(){
  this.enabled = false;
  return this;
};

Mouse.prototype.on = function(evName, callback){
  if (!this.events[evName]){
    this.events[evName] = [];
  }

  this.events[evName].push(callback);

  return this;
};

Mouse.prototype.off = function(evName){
  if(!evName){
    for(var ev in this.events){
      if (this.events.hasOwnProperty(ev)){
        this.events[ev].length = 0;
      }
    }

    return;
  }
  
  if (!this.events[evName]){
    this.events[evName].length = 0;
  }

  return this;
};

Mouse.prototype._onSlide = function(e){
  if (!this.enabled || !e.which){
    return;
  }

  _.each(this.events.slide, function(cb){
    cb(normalizeEventCoordinates(e));
  });
};

Mouse.prototype._onSlideStart = function(e){
  if (!this.enabled){
    return;
  }

  _.each(this.events["slide:start"], function(cb){
    cb(normalizeEventCoordinates(e));
  });
};

Mouse.prototype._onSlideEnd = function(e){
  if (!this.enabled){
    return;
  }

  _.each(this.events["slide:end"], function(cb){
    cb(normalizeEventCoordinates(e));
  });
};

