class Ch2_drunkard {
  run (deck1, deck2) {
    for (let r = 0; r < 100; r += 1) {
      const cart1 = deck1.shift();
      const cart2 = deck2.shift();

      if (cart1 > cart2) {
        deck1.push(cart1, cart2);
      }
      if (cart1 < cart2) {
        deck2.push(cart2, cart1);
      }

      if (deck1.length === 0 && deck2.length === 0) {
        return 'Botva!';
      }
      if (deck1.length === 0) {
        return `Second player. Round: ${round}`;
      }
      if (deck2.length === 0) {
        return `First player. Round: ${round}`;
      }
    }

    return 'Botva!';
  }
}

const game = new Ch2_drunkard();

console.log(game.run([1], [2]));
console.log(game.run([2], [1]));
console.log(game.run([1], [1]));
console.log(game.run([1, 2], [3, 2]));
console.log(game.run([1, 3], [2, 1]));
console.log(game.run([3, 1], [1, 3]));
