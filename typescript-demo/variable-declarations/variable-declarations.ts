// var ， scope 为当前function
// let, scope 为当前scope, 如function， for, loop
// const , can not reassign

function varScore() {
    for (var i = 0; i < 10; i++) {
        setTimeout(function () {
            console.log("varScore", i);
        }, 100 * i);
    }
    console.log(i) // i is in function varScore scope
}

function letScore() {
    for (let i = 0; i < 10; i++) {
        setTimeout(function () {
            console.log("letScore", i);
        }, 100 * i);
    }
    // console.log(i)  i only in current for loop
}

varScore();
letScore();
