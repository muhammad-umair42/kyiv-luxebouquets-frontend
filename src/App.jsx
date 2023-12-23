import "./App.css"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/Homepage/HomePage"
import SignUp from "./pages/Auth/SignUp/SignUp"
import SignIn from "./pages/Auth/SignIn/SignIn"
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </>
  )
}

export default App
