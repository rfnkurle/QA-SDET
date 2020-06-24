console.log("it works !!!");

// Make a div
const div = document.createElement("div")
// add a class of wrapper to it
div.classList.add("wrapper");
// put it into the body
document.body.appendChild(div)
// make an unordered list
// const uList = document.createElement("ul")


// add three list items with the words "one, two three" in them
const ul = `<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>
`
// put that list into the above wrapper
div.innerHTML = ul;
console.log(div);
// create an image
const img = document.createElement("img")
// set the source to an image
img.src = "https://source.unsplash.com/random/300x300"
// set the width to 250
img.width = 250;
// add a class of cute
img.setAttribute("class", "cute")
// img.classList.add("cute") other way
// add an alt of Cute Puppy
img.setAttribute("alt", "Cute Puppy")
img.alt = "cute puppy"
// Append that image to the wrapper
div.appendChild(img)
// with HTML string, make a div, with two paragraphs inside of it
const newDiv = document.createElement("div")
const p =`<p>
Hello</p>
<p>
Goodbye</p>
`
newDiv.innerHTML = p;
console.log(p)
// put this div before the unordered list from above
const newUl = newDiv.querySelector("ul")
newUl.insertAdjacentHTML('beforebegin', p)
// add a class to the second paragraph called warning
// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// Have that function make 4 cards

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
