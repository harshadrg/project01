import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import MainLayout from './components/layout/MainLayout.jsx'
import {Home , AboutUs, Services, Contact} from './pages/index.jsx'
import { HashRouter, Route, Routes } from 'react-router-dom'


const routes =(
    <Route path='/' element={<MainLayout/>}>
      <Route index path='' element={<Home/>}/>
      <Route path='about-us' element={<AboutUs/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>
  )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>{routes}</Routes>
    </HashRouter>
  </StrictMode>,
)
