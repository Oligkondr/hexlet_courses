function newYearCongratulate(value1: string): string;
function newYearCongratulate(value1: number, value2: string): string;
function newYearCongratulate(value1: unknown, value2?: string): string {
    if (typeof value1 === 'number') {
        return `Hi ${value2}! Happy New Year ${value1}!`
    }

    return `Hi ${value1}! Happy New Year!`
}

console.log(newYearCongratulate('John'))
console.log(newYearCongratulate(2023, 'Mila'))
