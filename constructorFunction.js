// JAVASCRIPT CONSTRUCTOR FUNCTION
function User(email, name) {
    this.email = email
    this.name = name
    this.online = false
}

// prototype -> points to the __proto__ property
User.prototype.login = function () {
    this.online = true
    console.log(this.email, "has logged in");
}
User.prototype.logout = function () {
    this.online = false
    console.log(this.email, "has logged out");
}

let user1 = new User("abc@gmail.com", "abc")
let user2 = new User("xyz@gmail.com", "xyz")
console.log(user1);
user2.login()
console.log(user2);
user2.logout()
console.log(user2);
// You cannot manipulate prototype property of user1 or user2 object. It can be only used for the Constructor fn. User