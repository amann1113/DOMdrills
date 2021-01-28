var name = ('Austin');

// adding 5 and 4 to output 9 in the console
var a = (5 + 4);

// creating a constant to output 50 in console for how many states
const states = (50);

var veggieArray = [
    'carrot',
    'tomato',
    'potato',
    'broccoli',
    'squash',
]

let pet = {
    name: 'Gracie',
    breed: '?'
};



function sayHello(world) {
    alert("Hello World!")
    sayHello("Hello World")
}



function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page");
    }
}
checkAge("Charles", 21)
checkAge("Abby", 27)
checkAge("James", 18)
checkAge("John", 17)


console.log(name);
console.log(states);
console.log(a);
console.log(veggieArray[0], veggieArray[1], veggieArray[2], veggieArray[3], veggieArray[4]);
console.log(pet.name, pet.breed);

// var person = {
//     function() {
//         return this. ('firstname' + age);

//     }
// }

let friendArray = [
    {
        firstname: 'Charles',
        age: 21
    },
    {
        firstname: 'Abby',
        age: 27
    },
    {
        firstname: 'James',
        age: 18
    },
    {
        firstname: 'John',
        age: 17
    },
]

console.log(friendArray[0].firstname);

for (let i = 0; 1 < friendArray.length; i++) {
    checkAge(friendArray[i].name, friendArray[i].age)
}


function getLength(word) {
    if (word.length % 2 == 0) {
        console.log("The world is nice and even")
    } else {
        console.log("The world is an odd place")
    }
}

getLength('Hello World')
getLength('HelloWorld')