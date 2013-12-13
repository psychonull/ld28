
var Mouse = module.exports = function(options){
  this.container = options.container || window.document;

  this.events = {
      "aim": null
    , "propelling:on": null
    , "propelling:off": null
    , "gun:on": null
    , "gun:off": null
    , "rocket": null
    , "pause": null
  };

  this.enabled = false;

  this.onAim = this._onContainerMove.bind(this);
  $(this.container).on('mousemove', this.onAim);

  this.onMouseDown = this._onMouseDown.bind(this);
  $(this.container).on('mousedown', this.onMouseDown);

  this.onMouseUp = this._onMouseUp.bind(this);
  $(this.container).on('mouseup', this.onMouseUp);

  this.keyUp = this._onContainerKeyUp.bind(this);
  $(document).on('keyup', this.keyUp);

  this.keyDown = this._onContainerKeyDown.bind(this);
  $(document).on('keydown', this.keyDown);

  this.propelling = false;
};

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
  if (!this.events[evName]){
    this.events[evName].length = 0;
  }

  return this;
};

Mouse.prototype._onContainerMove = function(e){
  if (!this.enabled){
    return;
  }

  var offset = $(e.target).offset();
  var x = e.pageX - offset.left;
  var y = e.pageY - offset.top;

  _.each(this.events.aim, function(cb){
    cb({ x: x, y: y });
  });
};

Mouse.prototype._getEventName = function(e){
  var key = e.which || e.keyCode;
  switch(key){
    case 32: return "propelling";
    case 112:
    case 80: 
      return "pause";
  }

  return;
};

Mouse.prototype._onContainerKeyDown = function(e){
  if (!this.enabled){
    return;
  }

  var evName = this._getEventName(e);

  if (evName){
    _.each(this.events[evName + ":on"], function(cb){
      cb();
    });
  }
};

Mouse.prototype._onContainerKeyUp = function(e){
  if (!this.enabled){
    return;
  }

  var evName = this._getEventName(e);

  if (evName){
    if (evName === "pause"){
      _.each(this.events[evName], function(cb){
        cb();
      });  
    }
    else {
      _.each(this.events[evName + ":off"], function(cb){
        cb();
      });
    }
  }
};

Mouse.prototype._onMouseDown = function(){
  if (!this.enabled){
    return;
  }

  _.each(this.events["gun:on"], function(cb){
    cb();
  });
};

Mouse.prototype._onMouseUp = function(){
  if (!this.enabled){
    return;
  }

  _.each(this.events["gun:off"], function(cb){
    cb();
  });
};
