import Welcome from './components/Welcome'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Screen from './components/Screen';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/screen" element={<Screen />} />
      </Routes>
    </Router>
  )
}

export default App
