import { fetchingNews } from '../views/newsView.js';

export async function requestData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`HTTP error, status= ${response.status}`);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function main(url) {
  try {
    const responseOfRequest = await requestData(url);
    fetchingNews(responseOfRequest);
  } catch (error) {
    const errorInformation = `${error.message} - code: ${error.code} - status: ${error.status}`;

    console.error(errorInformation);
  }
}
