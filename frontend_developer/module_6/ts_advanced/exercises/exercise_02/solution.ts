class MyFile {
    name: string
    size: number
    isCopy: boolean

    constructor(obj: { name: string, size: number } | MyFile) {
        this.isCopy = obj instanceof MyFile
        this.name = obj.name
        this.size = obj.size
    }

    toString(): string {
        return `${this.isCopy ? '(copy) ' : ''}${this.name} (${this.size} bytes)`
    }
}

const file1 = new MyFile({name: 'open-world.jpeg', size: 1000});
const file2 = new MyFile(file1);
console.log(`${file1}`)
console.log(`${file2}`)
