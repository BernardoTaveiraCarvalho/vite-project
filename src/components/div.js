import { img } from "../view.js"
import { ce, qs,addE } from "../helper/dom.js"
import { GetApi } from "../Api/GetApi.js"
function creatediv(url,name){
    const div = ce('div',name)
    
    img(url,div)
    addE(div,"click",()=>{
        alert("w")
        GetApi(name)
    })
    qs('#Pokedex').appendChild(div)
}
export {creatediv}