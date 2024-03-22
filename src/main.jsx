import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Blogpage from './pages/Blogpage.jsx';
import Bookmark from './pages/Bookmark.jsx';
import Home from './pages/Home.jsx';
import Mainlayout from './components/Mainlayout/Mainlayout.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Mainlayout></Mainlayout>,
    children:[
      {
        path:"/blog/",
        element:<Blogpage></Blogpage>
      },
      {
        path:"/bookmark",
        element:<Bookmark></Bookmark>
      }
      
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
