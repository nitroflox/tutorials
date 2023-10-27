function Vector(_x, _y){
    if(arguments.length == 0){
        _x = 0;
        _y = 0;
    }
    this.x = _x;
    this.y = _y;
};

Object.defineProperty(Vector.prototype, "Length", {
	get: function() { 
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },
	set: function(length) {
	    let angle = this.Angle;
	    this.x = Math.cos(angle) * length;
	    this.y = Math.sin(angle) * length;
	}
});

Object.defineProperty(Vector.prototype, "Angle", {
	get: function() { 
        return Math.atan2(this.y, this.x); 
    },
	set: function(angle) {
	    let length = this.Length;
	    this.x = Math.cos(angle) * length;
	    this.y = Math.sin(angle) * length;
	}
});

Vector.prototype.getLength = function(){
    return Math.sqrt(this.x * this.x + this.y * this.y);
};

Vector.prototype.setLength = function(length){
    let angle = this.getAngle();
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
};

Vector.prototype.getAngle = function(){
    return Math.atan2(this.y, this.x);
};

Vector.prototype.setAngle = function(angle){
    let length = this.getLength();
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
};

Vector.prototype.Add = function(v, arg = false){
    if(arg) return new Vector(this.x + v.x, this.y + v.y);
    this.x += v.x;
    this.y += v.y;
};

Vector.prototype.Subtract = function(v, arg = false){
    if(arg) return new Vector(this.x - v.x, this.y - v.y);
    this.x -= v.x;
    this.y -= v.y;
};

Vector.prototype.Multiply = function(n, arg = false){
    if(arg) return new Vector(this.x * n, this.y * n);
    this.x *= n;
    this.y *= n;
};

Vector.prototype.Divide = function(n, arg = false){
    if(arg) return new Vector(this.x / n, this.y / n);
    this.x /= n;
    this.y /= n;
};

Vector.prototype.AngleTo = function(v){
    return Math.atan2(v.y - this.y, v.x - this.x);
};

Vector.prototype.Normalize = function(arg = false){
    let length = this.getLength();
    if(length == 0) return new Vector();
    if(arg) return this.Divide(length, true);
    this.x /= length;
    this.y /= length;
};

Vector.prototype.Negative = function(arg = false){
    if(arg) return new Vector(-this.x, -this.y);
    this.x = -this.x;
    this.y = -this.y;
};

Vector.prototype.Equals = function(v){
    return this.x == v.x && this.y == v.y;
};

Vector.prototype.Copy = function(){
    return new Vector(this.x, this.y);
};

Vector.DistanceBetween = function (v1, v2){
    let x = v1.x - v2.x;
    let y = v1.y - v2.y;
    return Math.sqrt(x * x + y * y);
};

Vector.Cross = function(v1, v2){
    return v1.x * v2.y - v1.y * v2.x;
};

Vector.Dot = function(v1, v2){
    return v1.x * v2.x + v1.y * v2.y;
};

Object.defineProperty(Vector.prototype, 'angle', Object.getOwnPropertyDescriptor(Vector.prototype, 'Angle'));
Object.defineProperty(Vector.prototype, 'length', Object.getOwnPropertyDescriptor(Vector.prototype, 'Length'));
Object.defineProperty(Vector.prototype, 'mag', Object.getOwnPropertyDescriptor(Vector.prototype, 'Length'));
Vector.prototype.add = Vector.prototype.Add;
Vector.prototype.sub = Vector.prototype.Subtract;
Vector.prototype.subtract = Vector.prototype.Subtract;
Vector.prototype.mult = Vector.prototype.Multiply;
Vector.prototype.multiply = Vector.prototype.Multiply;
Vector.prototype.div = Vector.prototype.Divide;
Vector.prototype.divide = Vector.prototype.Divide;
Vector.prototype.angleTo = Vector.prototype.AngleTo;
Vector.prototype.norm = Vector.prototype.Normalize;
Vector.prototype.normalize = Vector.prototype.Normalize;
Vector.prototype.negative = Vector.prototype.Negative;
Vector.prototype.neg = Vector.prototype.Negative;
Vector.prototype.copy = Vector.prototype.Copy;
Vector.prototype.Clone = Vector.prototype.Copy;
Vector.prototype.clone = Vector.prototype.Copy;
Vector.prototype.equals = Vector.prototype.Equals;