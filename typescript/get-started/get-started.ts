let a: number;
a = 8;
console.log(3 / a);

interface User {
    Name: string,
    Age: number,
}

class UserAccount {
    readName: string;

    constructor(public Name: string, public Age: number) {
        this.Name = Name;
        this.Age = Age;
    }

    getRealName() {
        return "betty" + this.Name;
    }
}

type UserAccounts = Array<User>;

function getAdmin(): User {
    return new UserAccount("admin", 2);
}

function getUsers(): UserAccounts {
    let user1 = new UserAccount("admin", 2);
    return [user1];
}

function deleteUser(user: User): boolean {
    console.log(user, "delete!");
    return true
}

function getUserRealName(name: string): string {
    let admin = new UserAccount("admin", 2);
    if (name === admin.Name) {
        return admin.getRealName();
    } else {
        return name
    }
}

let userJ = {
    Name: "bettyJ",
    Age: 2,
};
let userT: User = {
    Name: "bettyT",
    Age: 2,
};
let userC: User;
userC = new UserAccount("bettyC", 1);
console.log(userJ);
console.log(userT);
console.log(userC);
console.log(getAdmin());
console.log(deleteUser(userT));
console.log(getUsers());
console.log("this is user readname: ", getUserRealName("admin"));
