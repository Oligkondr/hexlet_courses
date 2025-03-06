const solution = (value) => ({
  value,
  valueOf () {
    return `Value is ${this.value}`;
  },
});
