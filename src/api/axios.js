import axios from 'axios';
import { toast } from 'react-toastify';
import { dataController } from './dataController';
const instance = axios.create({
  baseURL: 'http://localhost:4000/api/v1', // Replace with your API base URL
  timeout: 10000,
  withCredentials: true, // Set timeout to 5 seconds
  headers: {
    'Content-Type': 'multipart/form-data',
    // You can add common headers here, e.g., authorization token
  },
});

export const makeRequest = async ({
  method,
  url,
  reqData = {},
  reqType = '',
  dispatch = null,
}) => {
  let success = false;
  let resData = null;

  try {
    const { data } = await instance[method](url, reqData);
    resData = dataController(reqType, data, dispatch);
    success = true;
    return { success, resData };
  } catch (error) {
    //Error Mesage is in HTML format so we need to trim only message

    const parser = new DOMParser();
    const doc = parser.parseFromString(error?.response?.data, 'text/html');
    const errorUnTrimmedMessage = doc.body.textContent.trim();
    const regex = /Error: (.+?)\s+at/;
    const match = regex.exec(errorUnTrimmedMessage);
    const errorMessage = match ? match[1] : 'Could not connect to server';

    //SHOWING ERROR
    toast.error(errorMessage);
    return { success, resData };
  }
};

export default makeRequest;
