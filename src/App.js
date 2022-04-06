 
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from './Segments/Navbar';
import Homepage from './Pages/Homepage'
import Aboutus from './Pages/Aboutus'
import Gallery from './Pages/Gallery'
import Signup from './Pages/Signup'


function App() {
  return (
   <>
   <Router>
   <Navbar/>
   <Routes>
     <Route path="/" element={<Homepage/>} />
     <Route path="/aboutus" element={<Aboutus/>} />
     <Route path="/Gallery" element={<Gallery />} />
     <Route path="/signup" element={<Signup />} />
   </Routes>
   </Router>
      
   </>
  );
}

export default App;
