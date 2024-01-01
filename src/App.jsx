import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import SignUp from "./pages/Auth/SignUp/SignUp";
import SignIn from "./pages/Auth/SignIn/SignIn";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import About from "./pages/AboutPage/About";
import SubscriptionPage from "./pages/SubscriptionPage/SubscriptionPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
      </Routes>
    </>
  );
}

export default App;
