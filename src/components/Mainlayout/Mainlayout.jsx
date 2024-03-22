import { Outlet } from "react-router-dom"
import Blogpage from "../../pages/Blogpage"
import Navbar from "../Navbar"


function Mainlayout() {
  return (
    <div>
        <div className="h-16">
            <Navbar></Navbar>
            
        </div>
        <Outlet></Outlet>
    
    </div>
  )
}

export default Mainlayout