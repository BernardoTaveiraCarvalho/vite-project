import { div } from "../view.js"

function GetApiPokemonImg(link){
    
    fetch(link)
    .then (response => {
        return response.json()
    } )
    .then (data =>{
       
        const {name,sprites} = data
        div(sprites.front_default,name)
    }) 
    
    }
    export {GetApiPokemonImg}
    