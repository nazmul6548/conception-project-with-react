import Footer from "../components/Footer"
import Hero from "../components/Hero"
import svg from "../assets/wave.svg"

function Homepage() {
  return (
   <div>
     <div className="flex relative  justify-center items-center ">
     <Hero></Hero>
     <img className="absolute bottom-0 w-full" src={svg} alt="" />
    </div>
   </div>
  )
}

export default Homepage