import axios from "axios";
import { setUser } from "../app/Slices/userSlice";
const instance = axios.create({
  baseURL: "http://localhost:3000/api/v1", // Replace with your API base URL
  timeout: 10000, // Set timeout to 5 seconds
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
    const { data } = await instance[method](url, reqData);
    if (reqType === "user") {
      dispatch(
        setUser({
          user: data.data.user,
          accessToken: data.data.accessToken,
          refreshToken: data.data.refreshToken,
        }),
      );
    }
    resData = data;
    success = true;
    console.log(data);
    return { resData, success };
  } catch (error) {
    alert("Change Inputs.\n" + error.message);

    return { resData, success };
  }
};

export default makeRequest;
