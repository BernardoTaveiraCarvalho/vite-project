function addE(constant,event,func,values){
    return constant.addEventListener(event,(e)=>func(e,values))
 }
function qs(selector,baseElement=document){
    return  baseElement.querySelector(selector) 
}
function qsa(selector,baseElement=document){
    return baseElement.querySelectorAll(selector)
}
function ce(selector,text){
    const element = document.createElement(selector)
    element.textContent= text;
    return element;
}
function formValues(e){
    const rawList=[...e.children] // [... ] para introduzir num array
        const inputsList=rawList.filter(input => {return input.name !== ''})
        return inputsList
}

export{addE,ce,formValues,qs,qsa,}
 