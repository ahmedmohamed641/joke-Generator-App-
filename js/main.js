import fetchApi from './fetch/fetch';

const btn = document.getElementById('btn');
const loaderContainer = document.querySelector('.loader-container');
const jokeText = document.getElementById('joke-text');

loaderContainer.style.display = 'none';

const jokeGenerator = async () => {
 const joke = await fetchApi('https://api.chucknorris.io/jokes/random');
 if (joke) {
  jokeText.textContent = joke.value;
 }
};

btn.addEventListener('click', jokeGenerator);
