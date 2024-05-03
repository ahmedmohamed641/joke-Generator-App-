/**
    - FEEDBACK
    - use proper folder naming, don't name `javascript` folder, name it `js`
    - also you need to create folders for other files loader folder -> loader.js
**/

import { displayLoading, hideLoading } from "./loader";

const btn = document.getElementById("btn")
const jokeText = document.getElementById("joke-text")
const loaderContainer = document.querySelector('.loader-container');

// this is unnesessary, in html the main js file should load last
window.addEventListener("load", () => {
    loaderContainer.style.display = 'none';
});

btn.addEventListener("click", jokeGenerator)

// the fetch call should be helper function, in its own file
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
