import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/AboutPage/About';
import ForgotPassword from './pages/Auth/ForgotPassword/ForgotPassword';
import SignIn from './pages/Auth/SignIn/SignIn';
import SignUp from './pages/Auth/SignUp/SignUp';
import UserDashBoard from './pages/DashBoards/UserDashBoard/UserDashBoard';
import HomePage from './pages/Homepage/HomePage';
import SubscriptionPage from './pages/SubscriptionPage/SubscriptionPage';

function App() {
  const user = useSelector(state => state.user.user);
  console.log(user);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/signin"
          element={user ? <Navigate to={'/'} replace={true} /> : <SignIn />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to={'/'} replace={true} /> : <SignUp />}
        />
        <Route
          path="/forgotpassword"
          element={
            user ? <Navigate to={'/'} replace={true} /> : <ForgotPassword />
          }
        />
        <Route
          path="/userdashboard"
          element={
            user ? (
              <UserDashBoard />
            ) : (
              <Navigate to={'/signin'} replace={true} />
            )
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
      </Routes>
    </>
  );
}

export default App;
