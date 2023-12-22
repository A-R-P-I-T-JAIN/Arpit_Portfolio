import './App.css'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Project from './components/Project/Project';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
