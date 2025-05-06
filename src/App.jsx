import './App.css'
import { Login } from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Converse } from './components/Converse'

function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element = {<Login />} />
          <Route path='/dashboard' element = {<Dashboard />}/>
          <Route path='/converse' element = {<Converse />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
