const url = "https://pokeapi.co/api/v2/pokemon/"
const div = document.getElementById('div');
const btn = document.getElementById('btn');
const btnDelete = document.getElementById('btn-delete');
const input = document.getElementById('input');

const traerPokemon = async () =>
{
    const id = input.value.toLocaleLowerCase();
    const response = await fetch(url + id)
    const data = await response.json()
    console.log(data);
    const html = 
    `
    <div styles="display: flex; justify-content: center; align-items: center;">
      <img width="130px" src="${data.sprites.other.home.front_default}">
      <h2 class="name-pokemon">${data.name}</h2>
    </div>

    `
    div.innerHTML = html;
    
    return data
}

traerPokemon()


const deleteAll = () =>
{
    div.innerHTML = '';
}

btn.addEventListener('click', traerPokemon);
btnDelete.addEventListener('click', deleteAll);
