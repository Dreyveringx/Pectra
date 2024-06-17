import './index.css'
import Home from './screens/Home';
import Benefits from './screens/Benefits';
import Community from './screens/Community';
import Login from './screens/Login';
import Registration from './screens/Registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/community" element={<Community />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      
    </Router>
    
  );
};

export default App;
