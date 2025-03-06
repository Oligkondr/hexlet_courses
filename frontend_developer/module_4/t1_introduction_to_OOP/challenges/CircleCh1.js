class CircleCh1 {
  constructor (rad) {
    this.rad = rad;
  }

  getArea = () => Math.PI * this.rad ** 2;

  getCircumference = () => 2 * Math.PI * this.rad;
}
