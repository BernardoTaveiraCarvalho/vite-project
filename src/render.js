import { addE,qs } from "./helper/dom.js"
import { GetApi } from "./Api/GetApi.js"
import {GetListApi} from "./Api/GetListApi.js"
function render (){

addE(qs('input[type=submit]'),"click",(e)=>{
    e.preventDefault()
    const input = qs('input[type=text]').value
    GetApi(input)
})
GetListApi()
}
export {render}