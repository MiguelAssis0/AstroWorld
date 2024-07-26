import './App.css'
import Init from './Init';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Cadaster from './Cadaster';
import Home from './Home';
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
        {!useStore.getState().Login ?
          <Routes>
            <Route path="/" element={<Init />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadaster" element={<Cadaster />} />
          </Routes>
          :
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

        }

      </Router>
    </div>
  )
}

