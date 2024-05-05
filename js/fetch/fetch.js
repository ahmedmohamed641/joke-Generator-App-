import { hideLoading,displayLoading } from "../loader/loader";

const jokeText = document.getElementById("joke-text")

async function fetchApi(url) {
    let response;
    let data = null
    displayLoading();

   try {
    response = await fetch(url);
    if (!response.ok) {
        throw new Error("Network response was not OK");
    }

    } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);

    } finally{
        hideLoading();
        data = await response?.json();
        return jokeText.textContent = data.value
    }
}

export default fetchApi;