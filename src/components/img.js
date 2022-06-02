import { ce } from "../helper/dom.js"
function createImg(name,ul){
    const li = ce('li')
    const img = ce('img')
    img.src = name;
    li.appendChild(img)
    ul.appendChild(li)
}

export {createImg}