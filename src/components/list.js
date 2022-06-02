import { li } from "../view.js"
import { img } from "../view.js"
import { ce } from "../helper/dom.js"
import { deletecomponent } from "../event/deletecomponent.js"
function createList(name,order,sprites,stats,types){
    deletecomponent("ul")
    const ul = ce('ul',"Pokemon")
    li("Name",name,ul)
    li("Order",order,ul)
    img(sprites.front_default,ul)
    img(sprites.front_shiny,ul)
    stats.forEach(state => li(state.stat.name,state.base_stat,ul))
    types.forEach(state => li("Type",state.type.name,ul))
 
   
    document.body.appendChild(ul)
}
export {createList}