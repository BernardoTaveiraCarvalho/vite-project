import './style.css'
import { render } from "./src/render.js";

document.querySelector('#app').innerHTML = `
<form >
<input type="text" placeholder="Nome" name="name"> 
<input type="reset" value="Limpar">
<input type="submit" value="Search">
</form>
<div id="Pokedex">
</div>
`
render()
