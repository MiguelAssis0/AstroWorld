import './App.css'
import Init from './components/Init';
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
        </Routes>
      </Router>
    </>
  )
}

