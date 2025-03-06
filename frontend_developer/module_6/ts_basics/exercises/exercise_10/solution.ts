type User = {
    name: string;
    age: number;
}

const getOlderUser = (user1: User, user2: User): User | null => {
    let result = null;
    if (user1.age > user2.age) {
        result = user1;
    } else if (user1.age < user2.age) {
        result = user2;
    } else {
        result = null;
    }

    return result;
}

const user1 = {name: 'Petr', age: 8};
const user2 = {name: 'Gosha', age: 15};

console.log(getOlderUser(user1, user2));
