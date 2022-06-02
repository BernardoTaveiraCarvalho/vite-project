//GET
const appp = document.querySelector('#app')

//pedir dados pela rote
// (fatch) - conveter o stream de dados para json ou o que for necessario
//numa promise acesso a incormacao e fazem o que teem a fazer


//Primeiro Métudo ES Promises
fetch('https://randomuser.me/api/?results=50')
.then (response => {
    return response.json()
} )
.then (data =>{
    const users = data.results 
    users.forEach(user => {
        const element = document.createElement('h1')
        element.textContent = `${user.name.first} ${user.name.last}`
        appp.append(element)
    });
}) 


//Segundo métudo  Async Await
    async function getAllUser(){
    const response = await fetch('https://randomuser.me/api/?results=50')
    const data  = await response.json()
    console.log("Async Await:",data)
}

//Terceiro métudo Axios precisa do import do axios
axios.get('https://randomuser.me/api/?results=50')
.then(response => console.log(response.data.results))

//Async await com axios precisa do import do axios
async function getAllUsersAxios(){
    const response = await axios.get('https://randomuser.me/api/?results=50')
    console.log(response.data.results)
}

//getAllUser()
//getAllUsersAxios()


//POST