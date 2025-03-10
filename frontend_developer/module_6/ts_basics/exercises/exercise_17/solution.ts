const isPlainObject = (value: unknown): boolean => {
    // return value instanceof Object && !Array.isArray(value);
    return typeof value === 'object' && !(value instanceof Array) && value != null;
};

console.log(typeof [])

console.log(isPlainObject(1));
console.log(isPlainObject('hexlet'));
console.log(isPlainObject({}));
console.log(isPlainObject({name: 'code-basics'}));
console.log(isPlainObject([1, 8]));
console.log(isPlainObject(null));
