const form = document.querySelector('form');
const factDiv = document.querySelector('.number-fact');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const number = e.target.querySelector('input[type="number"]').value;
    const loadText = 'Wait a little bit ⏳';
    factDiv.innerHTML = loadText;
    const baseURL = 'http://numberapi.com/';
    fetch(baseURL + number)
        .then(response => response.text())
        .then(text => factDiv.innerHTML = text);
})

