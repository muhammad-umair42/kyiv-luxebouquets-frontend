import { setUser } from '../app/Slices/userSlice';

export const dataController = (reqType, data, dispatch) => {
  let resData = null;

  switch (reqType) {
    case 'register':
      resData = data.data.user.username;
      break;

    case 'login':
      dispatch(
        setUser({
          user: data.data.user,
          accessToken: data.data.accessToken,
          refreshToken: data.data.refreshToken,
        }),
      );
      resData = data.data.user.fullName;
      break;

    case 'getcategories':
      resData = data.data;
      break;

    case 'specialEmails':
      resData = data.data.user.username;
      dispatch(setUser({ user: resData }));
      break;

    case 'resetpassword':
      resData = data.data.username;
      break;

    case 'logout':
      dispatch(setUser({ user: null, accessToken: null, refreshToken: null }));
      resData = data.message;
      break;
    case 'updateprofilepicture':
      dispatch(setUser({ user: data.data.user }));
      resData = data.message;
      break;
    default:
      resData = null;
      break;
  }
  return resData;
};
