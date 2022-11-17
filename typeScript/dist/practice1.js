"use strict";
const users = [{
        id: 2,
        name: "Jonathon Haley",
        username: "Monte.Weber2",
        email: "Daphne43@yahoo.com",
        phone: "1-563-675-1857 x11708",
        website: "carmela.net",
        password: "hashed_password",
        age: 34
    },
    {
        id: 5,
        name: "Jhon",
        username: "Jhonson",
        email: "jhon@yahoo.com",
        phone: "1-563-675-1857 x11708",
        website: "carmela.net",
        password: "jhon_password",
        age: 25
    },
    {
        id: 3,
        name: "Dean John",
        username: "dd.1",
        email: "deno@google.com",
        phone: "1-123-543-1857 123212",
        website: "dd.net",
        password: "Dean_hashed_password",
        age: 23
    },
    {
        id: 4,
        name: "demon slayer",
        username: "dd.1",
        email: "deno@google.com",
        phone: "1-123-543-1857 123212",
        website: "dd.net",
        password: "Dean_hashed_password",
        age: 21
    }
];
const newUser = {
    id: 1,
    name: "John doe",
    username: "mrjohn",
    phone: "1-563-675-1857 x11708",
    website: "carmela.net",
    password: "hashed_password",
    age: 34
};
function addLast(users, temp) {
    return [...users, temp];
}
function addFirst(users, temp) {
    return [temp, ...users];
}
function display(users) {
    return users.map(ele => {
        return { id: ele.id, name: ele.name, userName: ele.username };
    });
}
function findSpecificStartChar(users, userCharacter) {
    return users.filter(user => user.name.startsWith(userCharacter));
}
function findSumAges(users) {
    return users.reduce((prev, user) => (prev + user.age), 0);
}
function findAll(users) {
    return users.map(user => {
        return { Name: user.name, Age: user.age };
    });
}
function findSumOfAllAgesWithGivenCharacter(users, userCharacter) {
    let dataWithSpecificCharacter = findSpecificStartChar(users, userCharacter);
    let SumOfAllAgesWithGivenCharacter = dataWithSpecificCharacter.reduce((prev, user) => (prev + user.age), 0);
    return SumOfAllAgesWithGivenCharacter;
}
function Sorting(users, typeOfSorting) {
    console.log(typeOfSorting + "HERE");
    return users.sort((a, b) => {
        if (typeOfSorting == "ASC")
            return a.name.localeCompare(b.name);
        return b.name.localeCompare(a.name);
    });
}
function deleteRecord(users, objectIndex) {
    return users.splice(objectIndex, 1);
}
function InsertRecord(users, temp, objectIndex) {
    users.splice(objectIndex, 0, temp);
    return users;
}
console.log(InsertRecord(users, newUser, 1));
//# sourceMappingURL=practice1.js.map