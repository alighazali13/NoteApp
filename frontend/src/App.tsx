import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/auth/signup/SignUp"
import SignIn from "./pages/auth/Signin"
import AuthEntry from "./pages/auth/authentry"
import NoteStation from "./pages/notestation"
import Note from "./pages/note"
import AddNote from "./pages/addnote"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<AuthEntry />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      
      <Route path="/notes" element={<NoteStation />} />
      <Route path="/note/:id" element={<Note />} />
      <Route path="/note/add" element={<AddNote />} />
    </Routes>
    </>
  )
}

export default App
