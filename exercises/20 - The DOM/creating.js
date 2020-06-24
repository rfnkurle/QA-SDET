console.log("it's working")

//make element
const myParagraph = document.createElement("p")
//attributes and content
myParagraph.textContent = "I am a P"
console.log(myParagraph)

const myImage = document.createElement('img');

myImage.src = "https://source.unsplash.com/random/300x300"
myImage.alt = "This is a photo";

const myDiv = document.createElement("div");
myDiv.classList.add('wrapper')

//appendChild adds node, can be called against any node

myDiv.appendChild(myParagraph)
myDiv.appendChild(myImage)

document.body.appendChild(myDiv)





/////InsertAdjacent element(where do you want it to go?, element you want to go there)
const heading = document.createElement("h1")
heading.textContent = "This is a Spaceman"
document.body.insertAdjacentElement('afterbegin', heading)

const newList = document.createElement("ul");//create unordered list
const li = document.createElement("li")//creates list item
li.textContent = 'three'//give list item a value
newList.appendChild(li)//appends list item to new list

document.body.insertAdjacentElement('afterbegin', newList)