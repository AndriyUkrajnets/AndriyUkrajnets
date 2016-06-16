var user = getAuthenticatedUser();
// ...somewhere later in code:
var onlineUsers = [];

for (var name in allUsers) {
    var user = allUsers[name]; // Oops...
    if (user.online) onlineUsers.push(user);
}

assert(user === getAuthenticatedUser()); // nope :(

//-----------------------------------------------

var user = getAuthenticatedUser();
// ...
var onlineUsers = [];

for (let name in allUsers) {
    let user = allUsers[name];
    if (user.online) onlineUsers.push(user);
}

assert(user === getAuthenticatedUser()); // Woohoo!

//-----------------------------------------------

for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}
// 10, 10, 10, 10, 10, 10, 10, 10, 10, 10

//-----------------------------------------------

for (var i = 0; i < 10; i++) {
    // Ugly hack:
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    })(i);
}
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

//-----------------------------------------------

for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
