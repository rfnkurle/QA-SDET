console.log("it works")

// function doctorize(){
//     return `Dr. ${firstName}`
// }


//Anonymous function
// function (firstName) {
//     return `Dr. ${firstName}`
// }

//Function Expression, putting a function inside a variable
//functions in a variables are not hoisted

// const doctorize = function (firstName) {
//     return `Dr. ${firstName}`
// }


//arrow functions are anonymous functions
//one line, own scope

//explicit return
// const inchToCM = function(inches){
//     const cm = inches * 2.54;
//     //return inches * 2.54;
//     return cm;
// };

//implicit return
// const inchToCM = inches => inches * 2.54;


// function add (a, b = 3){
//     const total = a + b;
//     return total;
// }

// const add = (a, b = 3) => a + b;


// function makeAPerson(first, last){
    
//     const baby = {
        
//         name: `${first} ${last}`,
//         age: 0

//     }

//     return baby;
// }

// const makeAPerson = (first, last) => {
    
//    return {
        
//         name: `${first} ${last}`,
//         age: 0

//     }


// }

// const makeAPerson = (first, last) => ({name: `${first} ${last}`});

//IIFE
//immediately invoked function expression
//anonymous function wrapped in parentheses

// (function() {
    
//   console.log("Running an anon function");
//    return 'you are cool'
// })();

//Methods functions in an object

const robby = {

    name: "robby",
    sayHi: function() {
        console.log(`Hey ${this.name}`);
        return 'hey robby'
    },
    //short hand
    yellHi(){
        console.log('Hey Robby')
    },
    tellHi: () => {
        console.log("hello")
    }
}

//Callback - function that will happen when something is done - a click, time, ajax call

   
const button = document.querySelector(".clickme")

function coolio(){
    console.log("Coolio!!!")
}


button.addEventListener("click", robby.tellHi)
button.addEventListener("click", coolio)


setTimeout(function(){
    console.log("Who am I not to trust?")
}, 1000)
setTimeout(function(){
    console.log("I am what I want and attract what I am")
}, 3000)
setTimeout(function(){
    console.log("Everything I can think is already in existence")
}, 6000)
setTimeout(function(){
    console.log("I am a magnet to my dreams")
}, 8000)
setTimeout(function(){
    console.log("I surrender to the creator, you the powerful universe, trusting in your divine time that you will grant my desire")
}, 10000)
