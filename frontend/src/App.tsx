import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import SignUp from "./pages/auth/signup/SignUp"
import SignIn from "./pages/auth/Signin"
import AuthEntry from "./pages/auth/authentry"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<AuthEntry />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
      
      <Route path="home" element={<Home />} />
    </Routes>
    </>
  )
}

export default App
