import './style.css';

const buttonSubmit = document.querySelector('.buttonSubmit');
const inputElement = document.querySelector('#input');

buttonSubmit.addEventListener('click', (event) => {
    event.preventDefault();

    const MOEDA_API = `https://api.exchangerate.host/latest?base=${inputElement.value}`;
    
    fetch(MOEDA_API)
        .then((response) => response.json())
        .then((data) => console.log(data))

})



    