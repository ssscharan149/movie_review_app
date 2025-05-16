import { useState } from "react"
import "./Navbar.css"
import { Link, NavLink } from "react-router-dom"
function Navbar() {

  const [show,setShow] = useState(true)

  let submitShow=()=>{
    setShow(!show)
  }

  const activeLink={
    color:"#F8F9FA",
    fontWeight:"bold"
  }

  const inActiveLink={
    color:"grey"
  }

  return (
    <div>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand img"><img src="/logo.png" alt="" className="img" /></Link>
          <button className="navbar-toggler ms-auto bg-white" type="button" onClick={submitShow}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" style={show ? {display:"none"}:{display:"block"}}>
            <ul className="navbar-nav ms-auto">
          <li className="nav-item"><NavLink className="nav-link" to={"/"} style={({isActive})=>{
            return isActive ? activeLink : inActiveLink
            }}>Home</NavLink>
          </li>
          <li className="nav-item"><NavLink className="nav-link" to={"/register"} style={({isActive})=>{
            return isActive ? activeLink : inActiveLink
            }}>Register</NavLink>
          </li>
          <li className="nav-item"><NavLink className="nav-link" to={"/login"} style={({isActive})=>{
            return isActive ? activeLink : inActiveLink
            }}>Login</NavLink>
          </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar