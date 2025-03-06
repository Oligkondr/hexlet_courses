export default function Point (x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.getX = function getX () {
  return this.x;
};

Point.prototype.getY = function getY () {
  return this.y;
};

Point.prototype.toString = function toString () {
  return `(${this.getX()}, ${this.getY()})`;
};
