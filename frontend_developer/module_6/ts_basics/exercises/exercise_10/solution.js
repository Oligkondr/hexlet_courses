var getOlderUser = function (user1, user2) {
    var result = null;
    if (user1.age > user2.age) {
        result = user1;
    }
    else if (user1.age < user2.age) {
        result = user2;
    }
    else {
        result = null;
    }
    return result;
};
var user1 = { name: 'Petr', age: 8 };
var user2 = { name: 'Gosha', age: 15 };
console.log(getOlderUser(user1, user2));
