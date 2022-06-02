import { qs } from "../helper/dom.js"
function deletecomponent(component){
    if(qs(component)){
        qs(component).remove()
        
     }

 
}
export {deletecomponent}