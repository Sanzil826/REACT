import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Product from "./pages/Product"
import Notfound from "./pages/Notfound"
import Men from "./pages/Men"
import Women from "./pages/Women"
import Kids from "./pages/Kids"
import Courses from "./pages/Courses"
import CourseDetail from "./pages/CourseDetail"
import Navbar2 from "./components/Navbar2"

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar/>
      <Navbar2/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/product" element={<Product/>}>
          <Route path="men" element={<Men/>}></Route>
          <Route path="women" element={<Women/>}></Route>
          <Route path="kid" element={<Kids/>}></Route>
        </Route>
        <Route path="/courses" element={<Courses/>}>
        </Route>
          <Route path="/courses/:id" element={<CourseDetail/>}></Route>
        <Route path="*" element={<Notfound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
