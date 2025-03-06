export default function Segment (beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
}

Segment.prototype.getBeginPoint = function getBeginPoint () {
  return this.beginPoint;
};

Segment.prototype.getEndPoint = function getEndPoint () {
  return this.endPoint;
};

Segment.prototype.toString = function toString () {
  return `[${this.getBeginPoint()}, ${this.getEndPoint()}]`;
};
