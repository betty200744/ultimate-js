function RegisterUser(user) {
    var newUser = { name: "anonymous", nickname: "anonymous", fullName: "" };
    newUser.name = user.name || newUser.name;
    newUser.nickname = user.nickname || user.name || newUser.nickname;
    newUser.fullName = newUser.name + newUser.nickname;
    return newUser;
}
var betty = RegisterUser({ name: "betty", aaa: "aaa", bbb: "aaa" });
console.log(betty);
// betty.fullName = "bettzhao"; // cannot assign to readonly properties
console.log(betty);
