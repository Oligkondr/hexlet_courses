const filter = (numbers: number[], pred: (n: number) => boolean): number[] => {
    return numbers.filter((number: number) => pred(number));
};

const numbers = [1, -5, 2, 3, 4, 133];

console.log(filter(numbers, (n) => n > 3));
