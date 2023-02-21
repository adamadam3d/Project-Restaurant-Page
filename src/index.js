import './style.css';
import Menu from './menu.js';
import Home from './home.js';
const content = document.querySelector('#content')
function component() {

const header = document.createElement('header')
const hbutton = document.createElement('button')
const mbutton = document.createElement('button')
const cbutton = document.createElement('button')
hbutton.innerHTML = 'Home'
mbutton.innerHTML = 'Menu'
cbutton.innerHTML = 'Contact'
hbutton.addEventListener('click', () => {
    content.innerHTML = ''
    Home()
})
mbutton.addEventListener('click', () => {
    content.innerHTML = ''
    Menu()
})
cbutton.addEventListener('click', () => {
    alert('Contact')
})
header.appendChild(hbutton)
header.appendChild(mbutton)
header.appendChild(cbutton)
document.body.insertBefore(header, document.body.firstChild)
}

component()
Home()



