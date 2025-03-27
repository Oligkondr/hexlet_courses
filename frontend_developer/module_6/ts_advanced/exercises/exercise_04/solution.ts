class CustomFile {
    constructor(public name: string, public size: number) {
    }

    toString() {
        return `${this.name} (${this.size} bytes)`
    }
}
