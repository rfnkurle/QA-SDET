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
const inchToCM = function(inches){
    const cm = inches * 2.54;
    //return inches * 2.54;
    return cm;
};

//implicit return
const inchToCM = (inches0 => inches * 2.54;


