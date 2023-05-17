import { BASE_URL } from '../../config.js';

const request = async (method, url, data = null) => {
  try {
    const _url = BASE_URL + url;

    const response = await fetch(_url, {
      method,
      body: data && JSON.stringify(data),
    });
    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export default request;