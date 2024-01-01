import { setUser } from "../app/Slices/userSlice";

export const dataController = async (reqType, data, dispatch) => {
  let resData = null;
  switch (reqType) {
    case "register":
      resData = data.data;
      break;
    case "login":
      dispatch(
        setUser({
          user: data.data.user,
          accessToken: data.data.accessToken,
          refreshToken: data.data.refreshToken,
        }),
      );

      break;
    case "getcategories":
      resData = data.data;
      break;
    case "specialEmails":
      resData = data.data.user;
      dispatch(setUser({ user: resData }));
      break;
    case "resetpassword":
      resData = data.data.user;
      break;
    default:
      break;
  }
  return resData;
};
