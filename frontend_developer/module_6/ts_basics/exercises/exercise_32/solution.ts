type User = {
    id: number,
    name: string,
    age: number,
};

type Friends = [number, number];

export type UserResponse = {
    users: User[],
    friends: Friends[]
};

type Users = {
    users: User[],
    friends: Friends[],
}

const getUserFriends = (usersList: string, userId: number) => {
    const usersListObj: Users = JSON.parse(usersList);
    const friendList = usersListObj.friends.filter((pair) => pair.includes(userId));
    return friendList
}

const userJson = JSON.stringify({
    users: [
        {id: 1, name: 'John', age: 20},
        {id: 2, name: 'Mary', age: 21},
        {id: 3, name: 'Kate', age: 19},
        {id: 4, name: 'Ann', age: 18},
    ],
    friends: [
        [1, 2],
        [1, 3]
    ],
});

console.log(getUserFriends(userJson, 1))
// console.log(getUserFriends(userJson, 2))
// console.log(getUserFriends(userJson, 3))
// console.log(getUserFriends(userJson, 4))
