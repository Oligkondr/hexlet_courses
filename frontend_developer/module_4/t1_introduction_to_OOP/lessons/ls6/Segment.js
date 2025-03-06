function getBeginPoint () {
  return this.beginPoint;
}

function getEndPoint () {
  return this.endPoint;
}

export default function Segment (beginPoint, endPoint) {
  this.endPoint = endPoint;
  this.beginPoint = beginPoint;
  this.getEndPoint = getEndPoint;
  this.getBeginPoint = getBeginPoint;
}
