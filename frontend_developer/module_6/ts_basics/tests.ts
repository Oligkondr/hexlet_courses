function format(value: number, precision?:number): string
function format(value: string, prefix?:string): string
function format(value: string|number, opt?:number|string): string {
    if (typeof value === 'number') {
        return opt !== undefined ? value.toFixed(opt as number) : value.toString()
    } else {
        return opt !== undefined ? opt + ' ' + value : value;
    }
}

console.log(Math.PI);
console.log(Math.PI, 2);
console.log('World');
console.log('World', 'hello');
