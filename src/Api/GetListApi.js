import {GetApiPokemonImg } from "./GetApiPokemonImg.js"
function GetListApi(){
    
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    .then (response => {
        return response.json()
    } )
    .then (data =>{
       const i=0
       const array = data.results
       
       array.forEach(result => {
           console.log(result.url)
           GetApiPokemonImg(result.url)
       });
    }) 
    }
    export {GetListApi}
    