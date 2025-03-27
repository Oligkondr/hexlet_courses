type Form = {
    age: {
        value: number,
        validator: (val: number) => boolean
    },
    name: {
        value: string,
        validator: (val: string) => boolean
    }
};

const form: Form = {
    age: {
        value: 17,
        validator: (val) => val > 18
    },
    name: {
        value: 'Ui',
        validator: (val) => val.length >= 2
    }
};
