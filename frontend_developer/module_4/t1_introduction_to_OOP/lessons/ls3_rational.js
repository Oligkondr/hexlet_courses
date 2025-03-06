function make (numer, denom) {
  return {
    numer,
    denom,

    setNumer (newNumer) {
      this.numer = newNumer;
    },

    setDenom (newDenom) {
      this.denom = newDenom;
    },

    getNumer () {
      return this.numer;
    },

    getDenom () {
      return this.denom;
    },

    toString () {
      return `${this.numer}/${this.denom}`;
    },

    add (rat) {
      const ratNumer = rat.getNumer();
      const ratDenom = rat.getDenom();
      const newNumer = this.numer * ratDenom + ratNumer * this.denom;
      const newDenom = this.denom * ratDenom;
      return make(newNumer, newDenom);
    },
  };
}
