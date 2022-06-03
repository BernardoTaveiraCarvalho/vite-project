import { li } from "../view.js"
import { img } from "../view.js"
import { ce,qs } from "../helper/dom.js"
import { deletecomponent } from "../event/deletecomponent.js"
import { createButton } from "./button.js"
import { GoBack } from "../event/Goback.js"
function createList(name,order,sprites,stats,types){
    qs("#Pokedex").style.display="none"
    deletecomponent("ul")
    const ul = ce('ul',"Pokemon")
    li("Name",name,ul)
    li("Order",order,ul)
    img(sprites.front_default,ul)
    img(sprites.front_shiny,ul)
    stats.forEach(state => li(state.stat.name,state.base_stat,ul))
    types.forEach(state => li("Type",state.type.name,ul))
    createButton("Back","click",ul,GoBack)
    document.body.appendChild(ul)
    
}
export {createList}