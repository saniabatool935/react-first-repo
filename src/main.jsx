import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import { AppRoute } from './routes/appRoute.jsx'

const routes = createBrowserRouter(createRoutesFromElements(AppRoute))

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
 
  <RouterProvider  router={routes}/>
  </StrictMode>,
)
