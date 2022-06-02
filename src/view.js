import { createList } from "./components/list.js";
import { createh1 } from "./components/h1.js";
import { createLi } from "./components/li.js";
import { createImg } from "./components/img.js";
import { creatediv } from "./components/div.js";
import { createTable } from "./components/table.js";
function list(name,order,sprites,stats,types){
    createList(name,order,sprites,stats,types)
}
function h1(error){
   
    createh1 (error)
}
function li(name,text,ul){
    createLi(name,text,ul)
}
function img(name,ul){
    createImg(name,ul)
}
function div(url,name,table){
    creatediv(url,name,table)
}
function table(){
    createTable()
}

export {list,h1,li,img,div,table}