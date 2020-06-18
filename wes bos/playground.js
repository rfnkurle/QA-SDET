console.log("it works")

//window object is globally scoped

//when a variable is created inside a function it is not available outside until it is returned
const age = 100;

function go(){
    const age = 200;//shadow variable
    console.log(age)


}

go();

//block scope - curly brackets - once in gates not allowed to leave
//var is function scoped
//let and const are block scoped
function osCool(name){
let cool;
    if (name === "robby"){
    cool = true;
}
console.log(cool)
return cool
}

console.log(cool)

//JS is lexcially scoped


const dog = "george";

function logdog(){
    console.log(dog)
}

//this will log "george" since logdog is defined outside of go

function go(){
    const dog = "b-boy"
    logdog();
}