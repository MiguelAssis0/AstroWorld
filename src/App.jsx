import './App.css'
import Init from './components/Init';
import About from './components/About';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Route, 
  Routes 
} from 'react-router-dom'

export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Init />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

