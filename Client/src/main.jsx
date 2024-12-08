import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layouts/Layout.jsx'
import HomePage from './Pages/HomePage.jsx'
import AboutPage from './Pages/AboutPage.jsx'
import ServicePage from './Pages/ServicePage.jsx'
import BlogPage from './Pages/BlogPage.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import RegistrationPage from './Pages/RegistrationPage.jsx'
import ContactPage from './Pages/ContactPage.jsx'

const router = createBrowserRouter([
  {
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<HomePage/>
      },
      {
        path:'/about',
        element:<AboutPage/>
      },
      {
        path:'/services',
        element:<ServicePage/>
      },
      {
        path:'/blogs',
        element:<BlogPage/>
      },
      {
        path:'/contact',
        element:<ContactPage/>
      },
      {
        path:'/admin',
        element:<Dashboard/>
      },
      {
        path:'/login',
        element:<LoginPage/>
      },
      {
        path:'/register',
        element:<RegistrationPage/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <RouterProvider router={router}/>
  </StrictMode>,
)
