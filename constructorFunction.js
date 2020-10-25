// JAVASCRIPT CONSTRUCTOR FUNCTION
function User(email, name) {
    this.email = email
    this.name = name
    this.online = false
    this.login = function () {
        console.log(this.email, "has logged in");
    }
}
let user1 = new User("abc@gmail.com", "abc")
let user2 = new User("xyz@gmail.com", "xyz")
console.log(user1);
user2.login()