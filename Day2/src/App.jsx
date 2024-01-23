// import Hello_World from "./components/Hello_World"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Sign_In from "./pages/Sign_In"

function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/SignIn" element={<Sign_In/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
