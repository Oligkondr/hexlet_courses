// function getField(size: number): (('x' | 'o') | null)[][] {
//     const field: null[][] = Array(size).fill(null).map(() => Array(size).fill(null));
//     return field;
// }

const getField = (field: number): null[][] => {
    const result: null[][] = [];

    let str: null[] = [];

    for (let i = 0; i < field; i++) {
        str.push(null)
    }

    for (let i = 0; i < field; i++) {
        result.push(str)
    }

    return result;
}

const field1 = getField(5);
console.log(field1);

const field2 = getField(4);
console.log(field2);

const field3 = getField(3);
console.log(field3);
