import { Link } from "react-router-dom"


function Hero() {
  return (
    <div>

<div className="hero  min-h-[calc(100vh-116px)] pb-36">
  <div className="hero-content text-center">
    <div className="max-w-2xl">
      <h1 className="text-5xl  font-bold">Welcome to <span className="text-5xl bg-300% font-bold bg-gradient-to-r from-primary via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">TechUniverse</span></h1>
      <p className="py-6">TechUniverse sounds like a great name for a website with a focus on technology and innovation. It evokes a sense of exploration and vastness, suggesting that the website covers a wide range of topics within the realm of technology.</p>
      <div className="flex gap-5 justify-center items-center">
        

<Link
       to="/blog" className="relative inline-block px-4 py-2 font-medium group">
       <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
       <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
       <span className="relative text-black  group-hover:text-white">ReadBlog</span>
      
</Link>
<Link
       to="/bookmark" className="relative inline-block px-4 py-2 font-medium group">
       <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
       <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
       <span className="relative text-black group-hover:text-white">BookMark</span>
      
</Link>
      
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Hero