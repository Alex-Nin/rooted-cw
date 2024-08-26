import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Pages/Homepage'
import About from './Pages/About'
import Services from './Pages/Services'
import ContactUs from './Pages/ContactUs'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/rooted-cw' element={<Homepage />} />
        <Route path='/rooted-cw/about' element={<About />} />
        <Route path='/rooted-cw/services' element={<Services />} />
        <Route path='/rooted-cw/contact-us' element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
