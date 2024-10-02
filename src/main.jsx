import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, 
         RouterProvider} from 'react-router-dom';
import Main from './components/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  }
])

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
