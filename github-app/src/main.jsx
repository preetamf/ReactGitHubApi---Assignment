import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from "./component/Pages/Home.jsx"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import UserProfilePage from './component/Pages/UserProfilePage.jsx'


const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='user/:username' element={<UserProfilePage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
