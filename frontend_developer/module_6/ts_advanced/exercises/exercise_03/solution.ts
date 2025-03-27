type FileOptions = {
    name: string;
    size: number;
};

class MyFile {
    private name: string;
    private size: number;

    constructor(options: FileOptions) {
        this.name = options.name;
        this.size = options.size;
    }

    protected toString() {
        return `${this.name} (${this.size} bytes)`;
    }
}

// BEGIN (write your solution here)

class ImageFile extends MyFile {
    width: number
    height: number

    constructor(additions: FileOptions, width: number, height: number) {
        // super({name: options.name, size: options.size});
        super(additions);

        this.width = width
        this.height = height
    }

    toString() {
        return `${super.toString()} ${this.width}x${this.height}`
    }
}

// END

const imageFile = new ImageFile({name: 'image.png', size: 100}, 200, 300)
console.log(imageFile.toString());
