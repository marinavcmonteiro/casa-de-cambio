import './style.css';

const buttonSubmit = document.querySelector('.buttonSubmit');
const inputElement = document.querySelector('#input');
const cardContainer = document.querySelector('.card-container');


buttonSubmit.addEventListener('click', (event) => {
    event.preventDefault();

    const MOEDA_API = `https://api.exchangerate.host/latest?base=${inputElement.value}`;
    
    fetch(MOEDA_API)
        .then((response) => response.json())
        .then((data) => Object.entries(data.rates)
            .forEach((element) => {
                const card = document.createElement('div');
                card.classList = 'card';
                const sigla = document.createElement('p');
                const value = document.createElement('p');
                sigla.innerHTML = element[0];
                value.innerHTML = element[1];
                card.appendChild(sigla);
                card.appendChild(value);
                cardContainer.appendChild(card);
            }))

})



    