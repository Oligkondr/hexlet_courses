const reverse = (numbers: readonly number[]): number[] => {
    // const result: number[] = [];
    // for (let i = numbers.length - 1; i >= 0; i--) {
    //     result.push(numbers[i])
    // }
    return numbers.map((num, i) => {
        return numbers[(numbers.length - 1) - i]
    })
}

console.log(reverse([]))
console.log(reverse([2, 1]))
console.log(reverse([9, 3, 8]))
