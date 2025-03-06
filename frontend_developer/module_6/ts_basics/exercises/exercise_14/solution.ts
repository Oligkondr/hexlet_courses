const map = (numbers: number[], callback: (n: number, index: number) => number): number[] => {
    const result: number[] = [];
    numbers.forEach((number, i) => {
        result.push(callback(number, i));
    });
    return result;
};

console.log(map([3, 9], (n) => n - 3));
