
import { Toaster } from 'react-hot-toast'
import Login from './Components/Pages/Login/Login'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import MainPage from './Components/Pages/MainPage/MainPage'

function App() {


  return (
    <>
     <Toaster />
    <Routes>
      <Route element={<Layout />} >
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<Login />} />
        </Route>
    </Routes>
    </>
  )
}

export default App
