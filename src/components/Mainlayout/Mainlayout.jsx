import { Outlet } from "react-router-dom"

import Navbar from "../Navbar"
import Footer from "../Footer";


function Mainlayout() {
  return (
    <div>
        <div className="h-16">
            <Navbar></Navbar>
            
        </div>
        <div className="min-h-[calc(100vh-150px)]">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
    
    </div>
  )
}

export default Mainlayout;