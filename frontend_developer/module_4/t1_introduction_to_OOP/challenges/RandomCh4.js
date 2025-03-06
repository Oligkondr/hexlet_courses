class RandomCh4 {
  constructor (seed) {
    this.seed = seed;
    this.init = seed;
  }

  getNext () {
    return this.seed = (10 * this.seed + 7) % 7;
  }

  reset () {
    this.seed = this.init;
  }
}
