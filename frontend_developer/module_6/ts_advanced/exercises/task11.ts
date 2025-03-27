const last = <T>(elems: T[]): T | null => {
    return elems[elems.length - 1] ?? null;
}

console.log(last([])); // null
console.log(last([3, 2])); // 2
console.log(last(['code-basics', 'hexlet'])); // hexlet
