import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Places from './Places';
// import Expierence from './Expierence';
import Trip from './Trip';


import MainPage from './MainPage';


const linkStyle = {
    color: '#FF4500',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '10px',
    transition: 'color 0.3s, border 0.3s',
};

// Hover effect
linkStyle[':hover'] = {
    color: '#000',
    border: '2px solid purple',
};
function App() {
    return (
        <Router>
            <div>

                <nav style={{ height: '40px' }}>

                    <Link to="/" style={{ position: 'absolute', top: '0', left: '0', width: '120px', height: '60px', textAlign: 'left' }}>
                        <img src="Assets/Logo1.png" alt="Home" style={{ width: '130px', height: '100%', borderRadius: '50%' }} />
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <span style={{ color: '#ccc' }}> | </span>
                    <Link to="/Places" style={linkStyle}>Places</Link>
                        <span style={{ color: '#ccc' }}> | </span>
                    <Link to="/Trip" style={linkStyle}>Plan Trip with us</Link>
                        <span style={{ color: '#ccc' }}> | </span>
                        
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/Places" element={<Places />} />
                    <Route path="/Trip" element={<Trip />}/>
                    
                    
                </Routes>



            </div>
        </Router>
    );
}

export default App;
