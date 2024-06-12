import './index.css'
import Navbar from './Components/Navbar';
import Home from './screens/Home';
import Benefits from './screens/Benefits';
import Community from './screens/Community';
import Login from './screens/Login';
import Registration from './screens/Registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';

const App = () => {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/community" element={<Community />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </Router>
    
  );
};

export default App;
