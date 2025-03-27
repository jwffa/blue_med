import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Contact from '../pages/Contact.jsx'
import BlogPage from '../components/blog/BlogPage.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App><Home/></App>
  },
  {
    path: "/contact",
    element: <App><Contact/></App>
  },
  { path: "/blog-1", element: <App><BlogPage/></App>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
