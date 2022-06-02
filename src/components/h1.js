import { ce} from "../helper/dom.js"
import { deletecomponent } from "../event/deletecomponent.js"
    let text=""
function createh1(error){
    deletecomponent("h1")
    
    if(error==1){
        deletecomponent("ul")
        text="Pokemon not found!"
    }else{
        text="Pokemon found"
    }
 const h1= ce('h1',text)
    h1.setAttribute('id','pokemontext')
    document.body.appendChild(h1)

}

export {createh1}