import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/maincontent/details/About.jsx'
import Resume from './components/maincontent/details/Resume.jsx'
import Portfolio from './components/maincontent/details/Portfolio.jsx'
import Blog from './components/maincontent/details/Blog.jsx'
import Contact from './components/maincontent/details/Contact.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<About />} />
      <Route path='resume' element={<Resume />} />
      <Route path='portfolio' element={<Portfolio />} />
      <Route path='blog' element={<Blog />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)