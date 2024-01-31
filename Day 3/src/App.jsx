// import Hello_World from "./components/Hello_World"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Sidebar from "./components/Sidebar"
import UserSidebar from "./components/UserSidebar"
import ViewEvents from "./pages/User/ViewEvents"
import ViewVenues from "./pages/User/ViewVenues"
import ProfilePage from "./pages/Profile_page"
import Userhomepage from "./pages/User/Userhomepage"
import SignUp from "./pages/Sign_In"
import ContactUs from "./pages/Contact"
import AdminHomePage from "./pages/Admin/AdminHomePage"
import AdminViewEvents from "./pages/Admin/AdminViewEvents"
import BookingForm from "./pages/BookVenue"
import ViewBookings from "./pages/User/ViewBookings"

function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/SignIn" element={<SignUp/>}/>
    <Route path="/contact" element={<ContactUs/>}/>
    <Route path="/Admin" element={<AdminHomePage/>}/>
    <Route path="/Sidepanel" element={<Sidebar/>}/>
    <Route path="/Sidepanel1" element={<UserSidebar/>}/>
    <Route path="/User" element={<Userhomepage/>}/>
    <Route path="/userviewevents" element={<ViewEvents/>}/>
    <Route path="/userviewvenues" element={<ViewVenues/>}/>
    <Route path="/profile" element={<ProfilePage/>}/>
    <Route path="/bookvenue/:eventName" element={<BookingForm/>}/>
    <Route path="/adminviewevents" element={<AdminViewEvents/>}/>
    <Route path="/viewbookings" element={<ViewBookings/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
