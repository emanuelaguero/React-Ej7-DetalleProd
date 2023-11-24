import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Contacto from './component/Contacto.jsx'
import About from './component/About.jsx'
import Home from './component/home.jsx'
const router = createHashRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contacto',

        element: <Contacto />
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} >
    <App />
</RouterProvider>
  

)
