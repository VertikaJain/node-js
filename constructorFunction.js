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

// Prototype Inheritance
function Admin(...args) { //Rest parameter
    User.apply(this, args) // The apply() method calls a fn with a given this value and arguments provided as an array
    this.role = "super admin" // additional properties
}

Admin.prototype = Object.create(User.prototype) // Creating obj of specified prototype-> Also implements prototype chaining

Admin.prototype.deleteUser = function (user) { // additional property of admin
    Users = Users.filter(u => u.email != user.email)
}

let admin = new Admin("admin@gmail.com", "admin")
console.log(admin);
admin.login()
let Users = [user1, user2, admin]
console.log("Before deleting user: ", Users);
admin.deleteUser(user2)
console.log("After deleting user: ", Users);