const max = (num: number, ...nums: number[]) => {
    return Math.max(num, ...nums)
}

console.log(max(1, 2, 3))
console.log(max(123))
