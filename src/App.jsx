import Welcome from './components/Welcome'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Screen from './components/Screen';
import Screen2 from './components/Screen2';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/screen" element={<Screen />} />
        <Route path="/screen2" element={<Screen2 />} />
      </Routes>
    </Router>
  )
}

export default App
