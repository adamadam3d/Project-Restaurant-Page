import pic from './1.png'
import taco from './pic1.png'
export default function component(){
    const content = document.querySelector('#content')
    const pic1 = new Image()
    const pic2 = new Image()
    pic2.src = taco
    pic1.src = pic
    content.appendChild(pic1)
    content.appendChild(pic2)
    pic1.classList.add('fish')
    pic2.classList.add('taco')
    

}