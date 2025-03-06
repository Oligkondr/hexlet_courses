class Truncater {
  constructor (options = {}) {
    this.options = { ...this.constructor.defaultOptions, ...options };
  }

  static defaultOptions = {
    separator: '...',
    length: 200,
  };

  truncate (text, options = {}) {
    const { separator, length } = { ...this.options, ...options };
    return (text.length <= length)
      ? text
      : text
        .slice(0, length)
        .concat(separator);
  }
}

const truncater1 = new Truncater();
console.log(truncater1.truncate('one two')); // 'one two'
console.log(truncater1.truncate('one two', { 'length': 6 })); // 'one tw...'

const truncater2 = new Truncater({ 'length': 6 });
console.log(truncater2.truncate('one two', { 'separator': '.' })); // 'one tw.'
console.log(truncater2.truncate('one two', { 'length': 3 })); // 'one...'
