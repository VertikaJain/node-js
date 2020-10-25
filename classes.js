// JAVASCRIPT CLASSES-> ENCAPSULATING PROPERTIES & METHODS

class Demo {
    constructor(device, brand) {
        this.device = device
        this.brand = brand
    }
    login() {
        console.log("you have been logged in");
        return this // necessary to return this while method chaining
    }
    purchase() {
        console.log("you have purchased an", this.brand, this.device);
        return this
    }
    logout() {
        console.log("you have been logged out");
        return this
    }
}
let dataObj1 = new Demo("laptop", "apple")
let dataObj2 = new Demo("mobile", "android")
console.log(dataObj1);
console.log(dataObj2);

// Method Chaining
dataObj1.login().purchase()
dataObj2.purchase().logout()

/*
The "new" keyword:
    - creates a new empty object {}
    - sets the value of "this" to be the new empty object created.
    - calls the constructor method
*/

// Class Inheritance
class Admin extends Demo {
    deleteDemo(demo) {
        DataObjs = DataObjs.filter(d => d.device != demo.device)
    }
}
let admin = new Admin("iphone", "apple");
let DataObjs = [dataObj1, dataObj2, admin]
console.log("Before deleting: ", DataObjs);
admin.deleteDemo(dataObj2)
console.log("After deleting: ", DataObjs);