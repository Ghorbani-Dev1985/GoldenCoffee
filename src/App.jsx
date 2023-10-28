
import { Toaster } from 'react-hot-toast'
import Login from './Components/Pages/Login/Login'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout'

function App() {


  return (
    <>
     <Toaster />
    <Routes>
      <Route element={<Layout />} >
        </Route>
    </Routes>
    </>
  )
}

export default App
