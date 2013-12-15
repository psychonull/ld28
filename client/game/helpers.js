module.exports = {
  doBoxesCollide: function (a, b) {
    var pa = a.get('position')
      , pb = b.get('position')
      , sa = a.get('size')
      , sb = b.get('size');

    return !(
        ((pa.y + sa.height) < (pb.y)) ||
        (pa.y > (pb.y + sb.height)) ||
        ((pa.x + sa.width) < pb.x) ||
        (pa.x > (pb.x + sb.width))
    );
  },

  circleRectangleCollide: function(circle, rectangle){
    var dist = this.circleRectangleCollideDistance(circle, rectangle);
     
    // If the distance is less than the circle's radius, an intersection occurs
    var distanceSquared = (dist.x * dist.x) + (dist.y * dist.y);
    return distanceSquared < (circle.r * circle.r);
  },

  circleRectangleCollideDistance: function(circle, rectangle){
    // limits value to the range min..max
    function clamp(val, min, max) {
        return Math.max(min, Math.min(max, val));
    }
     
    // Find the closest point to the circle within the rectangle
    // Assumes axis alignment! ie rect must not be rotated
    var closestX = clamp(circle.x, rectangle.x, rectangle.x + rectangle.width);
    var closestY = clamp(circle.y, rectangle.y, rectangle.y + rectangle.height);
     
    // Calculate the distance between the circle's center and this closest point
    var distanceX = circle.x - closestX;
    var distanceY = circle.y - closestY;

    return {
      x: distanceX,
      y: distanceY
    };
  },

  // By position (center pos and radius)
  circlesCollide: function(x1, y1, r1, x2, y2, r2) {
    var dx = x1 - x2;
    var dy = y1 - y2;
    var dist = r1 + r2;
   
    return (dx * dx + dy * dy <= dist * dist);
  },

  // By Entity components of collision
  entitiesCollide: function(ent1, ent2) {
    var c1 = this.getCenter(ent1);
    var c2 = this.getCenter(ent2);

    c1.r = ent1.get('collision');
    c2.r = ent2.get('collision');

    var dx = c1.x - c2.x;
    var dy = c1.y - c2.y;
    var dist = c1.r + c2.r;
   
    return (dx * dx + dy * dy <= dist * dist);
  },

  isNear: function (a, b, distance) {
    var ca = this.getCenter(a);
    var cb = this.getCenter(b);

    var l = this.vectors.length(ca, cb);
    return l < distance;
  },

  aabbContainsSegment: function(x1, y1, x2, y2, minX, minY, maxX, maxY) {  
    // Completely outside.
    if ((x1 <= minX && x2 <= minX) || 
        (y1 <= minY && y2 <= minY) || 
        (x1 >= maxX && x2 >= maxX) || 
        (y1 >= maxY && y2 >= maxY)) { 
      return false; 
    }

    var m = (y2 - y1) / (x2 - x1);

    var y = m * (minX - x1) + y1;
    if (y > minY && y < maxY) { return true; }

    y = m * (maxX - x1) + y1;
    if (y > minY && y < maxY) { return true; }

    var x = (minY - y1) / m + x1;
    if (x > minX && x < maxX) { return true; }

    x = (maxY - y1) / m + x1;
    if (x > minX && x < maxX) { return true; }

    return false;
  },
  
  isPointInCircle: function(point, circleCenter, radius){
    return this.vectors.length(point, circleCenter) < radius;
  },

  isPointInBox: function (point, box) {
    return (
      point.y > box.y && point.y < box.y + box.size && 
      point.x > box.x && point.x < box.x + box.size
    );
  },

  drawPolygon: function(ctx, x, y, radius, sides, startAngle, anticlockwise) {
    if (sides < 3) {
      return;
    }

    var a = (Math.PI * 2) / sides;
    a = anticlockwise ? -a : a;
    
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(startAngle);

    ctx.moveTo(radius, 0);
    
    for (var i = 1; i < sides; i++) {
      ctx.lineTo( radius * Math.cos(a*i), radius * Math.sin(a*i) );
    }
    
    ctx.closePath();
    ctx.restore();
  },

  timeFromMs: function(ms){
    function format(val){
      return (val < 10) ? "0" + val : val;
    }

    var t = moment.duration(ms),
      m = format(t.minutes()),
      s = format(t.seconds());

    return m + ":" + s;
  },

  vectors: {
    difference: function(pA, pB){
      return {
          x: pB.x - pA.x
        , y: pB.y - pA.y
      };
    },

    length: function(p, pB){
      if (pB){
        p = this.difference(p, pB);
      }

      return Math.sqrt(p.x*p.x + p.y*p.y);
    },

    normalize: function(pA, pB){
      var d = this.difference(pA, pB);
      var l = this.length(d);

      return {
          x: d.x / l
        , y: d.y / l
      };
    },

    angleTo: function(p){
      return Math.atan2(p.y, p.x);
    },

    //point to vertex
    getCuadraticCoef: function(p, v){
      return (p.y - v.y) / (Math.pow(p.x - v.x, 2));
    }

  },

  angleToDeg: function(rad){
    return rad * 180/Math.PI;
  },

  angleToRad: function(deg){
    return deg * Math.PI/180;
  },

  getCenter: function(entity){
    var p = entity.get('position');
    var s = entity.get('size');

    return {
      x: p.x + s.width/2,
      y: p.y + s.height/2
    };
  },

  random11: function(){
    return Math.random() > 0.5 ? 1 : -1;
  },

  getCircleCollisionBounce: function(ea, eb){

    var pa = this.getCenter(ea);
    var pb = this.getCenter(eb);

    var sa = ea.get('size');
    var sb = eb.get('size');

    var va = ea.get("velocity") || { x: 1, y: 1 };
    var vb = eb.get("velocity") || { x: 1, y: 1 };

    var a = {
      x: pa.x,
      y: pa.y,
      vx: va.x,
      vy: va.y,
      w: sa.width,
      h: sa.height,
      radius: ea.get("collision"),
      mass: ea.get("mass") || ea.get("collision")
    };

    var b = {
      x: pb.x,
      y: pb.y,
      vx: vb.x,
      vy: vb.y,
      w: sb.width,
      h: sb.height,
      radius: eb.get("collision"),
      mass: eb.get("mass") || eb.get("collision") || 1
    };

    // Find the new velocities
    var vxTotal = a.vx - b.vx;
    var vyTotal = a.vy - b.vy;
    var newVelX1 = (a.vx * (a.mass - b.mass) + (2 * b.mass * b.vx)) / (a.mass + b.mass);
    var newVelY1 = (a.vy * (a.mass - b.mass) + (2 * b.mass * b.vy)) / (a.mass + b.mass);
    var newVelX2 = vxTotal + newVelX1;
    var newVelY2 = vyTotal + newVelY1;
     
    // Move the circles so that they don't overlap
    var midpointX = (a.x + b.x)/2;
    var midpointY = (a.y + a.y)/2;
    var dist = Math.sqrt(Math.pow((a.x - b.x), 2) + Math.pow((a.y - b.y), 2));
    a.x = midpointX + a.radius * (a.x - b.x)/dist;
    a.y = midpointY + a.radius * (a.y - b.y)/dist;
    b.x = midpointX + b.radius * (b.x - a.x)/dist;
    b.y = midpointY + b.radius * (b.y - a.y)/dist;

    a.x -= a.w/2;
    a.y -= a.h/2;
    b.x -= b.w/2;
    b.y -= b.h/2;

    // Update the velocities
    a.vx = newVelX1;
    a.vy = newVelY1;
    b.vx = newVelX2;
    b.vy = newVelY2;

    return {
      a: a,
      b: b
    };
  },

  applyCircleCollisionBounce: function(ea, eb){
    var r = this.getCircleCollisionBounce(ea, eb);

    ea.set("position", { x: r.a.x, y: r.a.y });
    eb.set("position", { x: r.b.x, y: r.b.y });
    ea.set("velocity", { x: r.a.vx, y: r.a.vy });
    eb.set("velocity", { x: r.b.vx, y: r.b.vy });
  }, 

  colors: {
    hsl_col_perc: function(percent,start,end) {

       var a = percent,
       b = end*a,
       c = b+start;

      //Return a CSS HSL string
      return 'hsl('+c+',100%,50%)';
    }


  }

};