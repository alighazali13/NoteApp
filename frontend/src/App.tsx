import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/auth/signup/SignUp"
import SignIn from "./pages/auth/Signin"
import AuthEntry from "./pages/auth/authentry"
import NoteStation from "./pages/notestation"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<AuthEntry />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
      
      <Route path="note" element={<NoteStation />} />
    </Routes>
    </>
  )
}

export default App
