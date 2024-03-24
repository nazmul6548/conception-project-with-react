import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../components/Mainlayout/Mainlayout";
import Homepage from "../pages/Homepage";
import Blogpage from "../pages/Blogpage";
import Blog from "../pages/Blogg";
import Bookmark from "../pages/Bookmark";
import Content from "../components/Content";
import Author from "../components/Author";




export const router = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout></Mainlayout> ,
      children: [
        {
          path: "/",
          element:<Homepage></Homepage>,
        },
        {
          path: "/blog/",
          element: <Blogpage></Blogpage>,
          loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
        },
        {
          path: "/blog/:id",
          element: <Blog></Blog>,
          loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          children:[
            {
                index:true,
                element:<Content></Content>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
                path:"author",
                element:<Author></Author>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            }
          ]
        },
        {
          path: "/bookmark",
          element: <Bookmark></Bookmark>,
        },
      ],
    },
  ]);