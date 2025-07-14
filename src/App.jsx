import Home from "./pages/Home"
// import Header from "./components/Header"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  
  return (
    <>
     {/* routing via react-router-dom(web specific) */}

     {/* share for all the pages */}
     <Navbar/> 

      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
