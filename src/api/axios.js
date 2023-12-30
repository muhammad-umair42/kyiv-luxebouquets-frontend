import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:3000/api/v1", // Replace with your API base URL
  timeout: 5000, // Set timeout to 5 seconds
  headers: {
    "Content-Type": "application/json",
    // You can add common headers here, e.g., authorization token
  },
});

export const makeRequest = async ({ method, url, reqData }) => {
  try {
    const { data } = await instance[method](url, reqData);
    return true;
  } catch (error) {
    alert("Already Existed User.\n" + error.message);
    return false;
  }
};

export default makeRequest;
