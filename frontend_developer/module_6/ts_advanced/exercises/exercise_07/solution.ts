abstract class Clock {
    hours: number = 0;
    minutes: number = 0;
    seconds: number = 0;

    abstract render(): void

    constructor(hours: number, minutes: number, seconds: number) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.render();
    }

    tick() {
        this.seconds += 1;
        this.addMinute();
    }

    addMinute() {
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes += 1;
            this.addHour();
        }
    }

    addHour() {
        if (this.minutes === 60) {
            this.minutes = 0;
            this.hours += 1;
            this.resetHour();
        }
    }

    resetHour() {
        if (this.hours === 24) {
            this.hours = 0;
        }
    }
}
class Clock24 extends Clock {
    render(): string {
        return `${this.hours.toString().padStart(2, '0')} : ${this.minutes.toString().padStart(2, '0')}`;
    }
}

const clock24 = new Clock24(23, 59, 59);
console.log(clock24.render()); // => '23 : 59'
clock24.tick();
console.log(clock24.render()); // => '00 : 00'

class Clock12 extends Clock {
    render(): string {
        const timeType = this.hours * 1000 + this.minutes + this.seconds < 12000 ? 'AM' : 'PM';
        const currentHour = this.hours % 12;
        return `${currentHour.toString().padStart(2, '0')} : ${this.minutes.toString().padStart(2, '0')} ${timeType}`;
    }
}

const clock12 = new Clock12(23, 59, 59);
console.log(clock12.render()); // => '11 : 59 PM'
clock12.tick();
console.log(clock12.render()); // => '00 : 00 AM'
