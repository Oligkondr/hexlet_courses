class Time11 {
  constructor (hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  static fromString (time) {
    const [hours, minutes] = time.split(':');
    return new Time11(hours, minutes);
  }

  toString () {
    return `${this.hours}:${this.minutes}`;
  }
}

const time1 = new Time11(10, 15);
console.log(`The time is ${time1}`); // => 'The time is 10:15'

const time2 = Time11.fromString('10:23');
// автоматически вызывается метод toString()
console.log(`The time is ${time2}`); // 'The time is 10:23'
