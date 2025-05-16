import { Outlet } from "react-router-dom"
import Navbar from "../navbar/Navbar"
import Footer from "../Footer/Footer"
import "./RootLayout.css"
function RootLayout() {
  return (
    <div>
      <div className="content-container">
      <Navbar/>
      </div>
      <div className="container-fluid main">
        <Outlet/>
      </div>
      <div className="footer-container">
        <Footer/>
      </div>
    </div>
  )
}
export default RootLayout