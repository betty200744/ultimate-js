interface User {
    name: string // mandatory properties
    nickname?: string // optional properties
    readonly fullName?: string // readonly properties
    [options: string]: any // excess properties
}

function RegisterUser(user: User) {
    let newUser = {name: "anonymous", nickname: "anonymous", fullName: ""};
    newUser.name = user.name || newUser.name;
    newUser.nickname = user.nickname || user.name || newUser.nickname;
    newUser.fullName = newUser.name + newUser.nickname;
    return newUser
}

let betty: User = RegisterUser({name: "betty", aaa: "aaa", bbb: "aaa"});
console.log(betty);
// betty.fullName = "bettzhao"; // cannot assign to readonly properties
console.log(betty);

