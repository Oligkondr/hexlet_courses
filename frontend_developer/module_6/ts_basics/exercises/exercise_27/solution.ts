const lastIndex = (str: string, char: string) => {
    let result = -1
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            result = i
        }
    }
    if (result === -1) {
        return null;
    }
    return result;
}

const str = 'test';
console.log(lastIndex(str, 't'));
console.log(lastIndex(str, 'p'));
