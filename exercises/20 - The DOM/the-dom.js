console.log('it works');

const p = document.querySelector('p')
const img = document.querySelectorAll(".items img");
// const item2 =document.querySelector("item2")
// const item2image = item2.querySelector('img')
// console.log(img)

const heading = document.querySelector('h2')
heading.textContent = "Robby is Cool"
console.dir(heading.textContent)







const nice = document.querySelector(".nice")
nice.classList.add('open')
nice.classList.remove('something')

console.log(nice.classList)


function toggleClick(){
    nice.classList.toggle("round")
}

nice.addEventListener("click", toggleClick)

console.log(heading.textContent)


nice.alt = 'something cool'//setter
console.log(nice.alt)//getter
