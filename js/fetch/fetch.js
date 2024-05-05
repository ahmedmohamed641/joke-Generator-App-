import { hideLoading, displayLoading } from '../loader/loader';

/**
 * fetch api
 * @param {string} url
 * @returns {object} data
 */
async function fetchApi(url) {
 let response;

 displayLoading();

 try {
  response = await fetch(url);
  if (!response.ok) {
   throw new Error('Network response was not OK');
  }
 } catch (error) {
  console.error('There has been a problem with your fetch operation:', error);
 } finally {
  hideLoading();
  return await response?.json();
 }
}

export default fetchApi;
