import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Home from './pages/Home';
// import ForgetPassword from './pages/ForgetPassword';
// import NewSubmit from './pages/NewSubmit';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
           {/* <Route path="/forget-pass" element={<ForgetPassword />} /> 
          <Route path="/otp" element={<NewSubmit />} /> */}
        </Routes>
      </Router>
      </div>

  );
}

export default App;