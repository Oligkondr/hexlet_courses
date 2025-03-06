const forEach = (arr: number[], callback: (n: number, i?: number) => void) => {
    for (const elem of arr) {
        callback(elem);
    }
}

forEach([1, 2, 3], (n) => console.log(n));

const result = [];
forEach([1, 2, 3], (n) => result.push(n));
console.log(result)
