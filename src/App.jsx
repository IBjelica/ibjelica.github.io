import { Routes, Route } from "react-router-dom";
import './assets/App.scss'
import './assets/Typography.scss'
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
