function getX () {
  return this.x;
}

function getY () {
  return this.y;
}

export default function Point (x, y) {
  this.x = x;
  this.y = y;
  this.getX = getX;
  this.getY = getY;
}
