//  1. object literal 
const player = {};
player.name = 'small Nirob';
player.specilty = 'batsman';
player.bats = function(){
    // console.log('swing your bat');
}

// console.log(player);
player.bats()

const student = {
    name: 'Panday',
    job: 'khai anday',
    ball: function(){
        // console.log('throw the ball');
    },
    salary: 100000
}

// 2. object constructor (this object use rare)
const person = new Object();
// console.log(person); 

// 3. object create method
// const item = Object.create(null);
const pandy = Object.create(student);
// console.log(pandy.friend);

// 4. class
class Person{
    name = 'abul';
    address = 'sodor ghat';
    constructor (age){
        this.age = age;
    }
}

const person1 = new Person(56);
// console.log(person1);

// 5. function

function car(model,price){
    this.model = model;
    this.price = price;
}

const tesla = new car('elon', 32);
console.log(tesla);