import axios from "axios";
import { dataController } from "./dataController";
const instance = axios.create({
  baseURL: "http://localhost:3000/api/v1", // Replace with your API base URL
  timeout: 10000,
  withCredentials: true, // Set timeout to 5 seconds
  headers: {
    "Content-Type": "application/json",
    // You can add common headers here, e.g., authorization token
  },
});

export const makeRequest = async ({
  method,
  url,
  reqData = {},
  reqType = "",
  dispatch = null,
}) => {
  let success = false;
  let resData = null;

  try {
    const data = await instance[method](url, reqData);
    const cookies = data?.headers;
    console.log(cookies);
    // resData = dataController(reqType, data, dispatch);
    // success = true;

    return { success, resData };
  } catch (error) {
    //Error Mesage is in HTML format so we need to trim only message

    const parser = new DOMParser();
    const doc = parser.parseFromString(error?.response?.data, "text/html");
    const errorUnTrimmedMessage = doc.body.textContent.trim();
    const regex = /Error: (.+?)\s+at/;
    const match = regex.exec(errorUnTrimmedMessage);
    const errorMessage = match ? match[1] : "Something went wrong";

    //SHOWING ERROR
    alert(errorMessage);
    return { success, resData };
  }
};

export default makeRequest;
