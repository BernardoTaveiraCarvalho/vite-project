import { img } from "../view.js"
import { ce, qs } from "../helper/dom.js"
function creatediv(url,name){
    const div = ce('div',name)
    img(url,div)
    qs('#Pokedex').appendChild(div)
}
export {creatediv}