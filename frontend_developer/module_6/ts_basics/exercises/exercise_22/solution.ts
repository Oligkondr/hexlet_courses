// const unique = (arr: (number | string)[]): (number | string)[] => {
//     const result: (number | string)[] = [];
//     let last: number | string | null = null;
//
//     arr.forEach((elem) => {
//         if (elem !== last) {
//             result.push(elem);
//             last = elem;
//         }
//     })
//
//     return result;
// }
//
// console.log(unique([9, 9, 3, 8, 8]));
// console.log(unique(['twinkle', 'twinkle', 'little', 'bat']));
// console.log(unique(['as', 'good', 'as', 'it', 'gets']));
// console.log(unique([1, 1, 3, 'oops!']));


// const unique = (arr: (number | string)[]): (number | string)[] => {
//     const result: (number | string)[] = [];
//
//     arr.reduce((acc, elem) => {
//         if (!acc.includes(elem)) {
//             acc.push();
//         }
//         return acc;
//     }, result);
//     return result;
// }

// type MyArray = (number | string)[]
//
// const unique = (arr: MyArray): MyArray => {
//     const uniqueValues = new Set(arr)
//     return [...uniqueValues]
// }
//
// console.log(unique([9, 9, 3, 8, 8]));
// console.log(unique(['twinkle', 'twinkle', 'little', 'bat']));
// console.log(unique([1, 1, 3, 'oops!']));

// type MyArray = (number | string)[]
//
// const unique = (arr: MyArray): MyArray => {
//     const uniqueValues = new Set(arr)
//     return [...uniqueValues]
// }
