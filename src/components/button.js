import { ce,addE } from "../helper/dom.js"
function createButton(name,event,object,func){
    const button = ce('button',name)
    addE(button,event,func,name)
    object.appendChild(button)
}
export {createButton}