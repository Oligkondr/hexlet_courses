const last = (value: string | number): string | number => {
    switch (typeof value) {
        case 'string':
            return value.slice(-1)
        case 'number':
            return Number(value.toString().slice(-1))
    }
}

console.log(last('hello'));
console.log(last(12345));
