import { list,h1 } from "../view.js"

function GetApi(nome){
    
fetch('https://pokeapi.co/api/v2/pokemon/'+nome)
.then (response => {
    return response.json()
} )
.then (data =>{
   
    const {name,order,sprites,stats,types} = data
    h1(0)
    list(name,order,sprites,stats,types)
}) 
.catch(function(error) {
    h1(1)
    alert("Error: "+error.mensage)
  })
}
export {GetApi}
