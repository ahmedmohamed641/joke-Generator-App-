import fetchApi from "./fetch/fetch";

const btn = document.getElementById("btn")
const loaderContainer = document.querySelector('.loader-container');

window.addEventListener("load", () => {
    loaderContainer.style.display = 'none';
});

btn.addEventListener("click", jokeGenerator);

function jokeGenerator() {
    fetchApi("https://api.chucknorris.io/jokes/random")
}