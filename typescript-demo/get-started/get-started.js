var a;
a = 8;
console.log(3 / a);
var UserAccount = /** @class */ (function () {
    function UserAccount(Name, Age) {
        this.Name = Name;
        this.Age = Age;
        this.Name = Name;
        this.Age = Age;
    }
    UserAccount.prototype.getRealName = function () {
        return "betty" + this.Name;
    };
    return UserAccount;
}());
function getAdmin() {
    return new UserAccount("admin", 2);
}
function getUsers() {
    var user1 = new UserAccount("admin", 2);
    return [user1];
}
function deleteUser(user) {
    console.log(user, "delete!");
    return true;
}
function getUserRealName(name) {
    var admin = new UserAccount("admin", 2);
    if (name === admin.Name) {
        return admin.getRealName();
    }
    else {
        return name;
    }
}
var userJ = {
    Name: "bettyJ",
    Age: 2,
};
var userT = {
    Name: "bettyT",
    Age: 2,
};
var userC;
userC = new UserAccount("bettyC", 1);
console.log(userJ);
console.log(userT);
console.log(userC);
console.log(getAdmin());
console.log(deleteUser(userT));
console.log(getUsers());
console.log("this is user readname: ", getUserRealName("admin"));
