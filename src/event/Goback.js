import { deletecomponent } from "./deletecomponent.js"
import { qs } from "../helper/dom.js"
function GoBack(){
  
    qs("#Pokedex").style="flex-direction: column;"
    deletecomponent("ul")
    deletecomponent("h1")
}
export {GoBack}