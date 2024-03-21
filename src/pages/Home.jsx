import Navbar from "../components/Navbar"
import Blogpage from "./Blogpage"
import Bookmark from "./Bookmark"
import Homepage from "./Homepage"


function Home() {
  return (
    <div>
        <div className="h-16">
        <Navbar></Navbar>
        </div>
        <Homepage></Homepage>
        <Blogpage></Blogpage>
        <Bookmark></Bookmark>
    </div>
  )
}

export default Home