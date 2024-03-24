import { Link } from "react-router-dom"
import placeholdrimg from '../assets/404.jpg'

function Blogcard({blog}) {
  const {cover_image,title,id,description,published_at} = blog
  return (
    <div>

<Link to={`/blog/${id}`}
            
            className="max-w-sm mx-auto group transition border-2 border-primary hover:scale-105 hover:border-secondary border-opacity-30  hover:no-underline focus:no-underline dark:bg-gray-900"

          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={cover_image || placeholdrimg}
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                {title}
              </h3>
              <span className="text-xs dark:text-gray-400">
                {' '}
                {new Date (published_at).toLocaleDateString()}
              </span>
              <p>
               {description}
              </p>
            </div>
          </Link>


    </div>
  )
}

export default Blogcard