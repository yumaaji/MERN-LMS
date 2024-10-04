import { Routes, Route } from 'react-router-dom'
import AuthPage from './pages/auth'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/auth' element={<AuthPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
