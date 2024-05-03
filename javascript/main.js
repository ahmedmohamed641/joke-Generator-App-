import { displayLoading, hideLoading } from "./loader";

const btn = document.getElementById("btn")
const jokeText = document.getElementById("joke-text")
const loaderContainer = document.querySelector('.loader-container');

window.addEventListener("load", () => {
    loaderContainer.style.display = 'none';
});

btn.addEventListener("click", jokeGenerator)

async function jokeGenerator() {
    const endpoint = "https://api.chucknorris.io/jokes/random" 
    let response;
    displayLoading();

   try {
    response = await fetch(endpoint);
    if (!response.ok) {
        throw new Error("Network response was not OK");
    }

    } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);

    } finally{
        const data = await response.json();
        jokeText.textContent = data.value;
        hideLoading();
    }
}