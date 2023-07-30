const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const button = document.querySelector('button')

screen1.addEventListener('click', handleClick)
button.addEventListener('click', handleClick)

function handleClick() {
   screen1.classList.toggle("hide")
   screen2.classList.toggle("hide")
}
