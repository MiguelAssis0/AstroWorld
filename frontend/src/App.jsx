import './App.css'
import Init from './components/Init';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Cadaster from './components/Cadaster';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import { useStore } from './store';

export default function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          {!useStore.getState().Login ?
            <Route path="/" element={<About />} />
            :
            <Route path="/" element={<Home />} />
          }

          <Route path="/about" element={<Init />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadaster" element={<Cadaster />} />
        </Routes>
      </Router>
    </div>
  )
}

