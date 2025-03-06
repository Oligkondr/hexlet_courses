import Square from './Square.js';

export default class SquaresGenerator {
  static generate (side, quantity = 5) {
    const arr = [];
    for (let num = 0; num < quantity; num++) {
      arr.push(new Square(side));
    }
    return arr;
  };
}

const squares = SquaresGenerator.generate(3, 2);
console.log(squares);
