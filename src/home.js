

export default function component(){
    const content = document.querySelector('#content')
    const center = document.createElement('div')
    const head = document.createElement('div')
    head.classList.add('head')
    content.classList.add('home')
    content.appendChild(center)
    center.classList.add('center')
    center.appendChild(head)
    head.innerText = 'Welcome to our restaurant'
    const line2 = document.createElement('div')
    line2.classList.add('line2')
    center.appendChild(line2)
    const right = document.createElement('div')
    right.classList.add('right')
    right.style.display = 'inline-block'
    right.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!'
    line2.appendChild(right)
    const left = document.createElement('div')
    left.classList.add('right')
    left.style.display = 'inline-block'
    left.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!'
    line2.appendChild(left)


}