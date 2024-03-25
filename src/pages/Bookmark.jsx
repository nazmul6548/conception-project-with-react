import { useEffect, useState } from "react"
import { deleteBlog, getBlogs } from "../utils"
import Blogcard from "./Blogcard"
import Emptystring from "../Emptystring"


function Bookmark() {
  const [blog,setBlog] = useState([])
  useEffect(() => {
const storeblog = getBlogs()
setBlog(storeblog)
  },[])
  const handledelete =id => {
    deleteBlog(id)
    const storeblog = getBlogs()
setBlog(storeblog)
  }
  if(blog.length <1) return <Emptystring message="no bookmark"></Emptystring>
  return (
    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {
     blog.map(blog => <Blogcard handledelete={handledelete} deletable={true} key={blog.id} blog={blog}></Blogcard>

     )
    }
     
   </div>
  )
}

export default Bookmark