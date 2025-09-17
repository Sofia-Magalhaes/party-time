import 'react-toastify/ReactToastify.css'
import './App.css'

import { Outlet } from 'react-router-dom'

import Navbar from './components/Navbar'

import { ToastContainer } from "react-toastify"

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
