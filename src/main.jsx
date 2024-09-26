import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
<<<<<<< HEAD
=======
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main.jsx';
>>>>>>> b3bb3fe6f81fc375e9bf17eb5d9060d03e5d6711

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>
  }
])

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
