type Entry = {
    [key: string]: number
};

interface IPhonebook {
    get(key: string): number | null;

    set(key: string, value: number): void;
}

class Phonebook implements IPhonebook {
    entries: Entry = {};

    get(name: string): number | null {
        return this.entries[name] ?? null;
    }

    set(name: string, phone: number): void {
        this.entries[name] = phone;
    }
}

const myNote = new Phonebook();
myNote.set('help', 911);
console.log(myNote.get('help')); // 911


