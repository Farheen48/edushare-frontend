import FormValidation from './FormValidation';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import UploadedFilesList from './UploadedFilesList';
import { LoginSignup } from './Components/LoginSignup/LoginSignup';
import Header from './Header';
import Footer from './Footer';
import './App.css';


function LayoutWrapper({ children }) {
  const location = useLocation();
  const isUploadPage = location.pathname === '/';

  return (
    <main style={{ padding: '20px', minHeight: '80vh' }}>
      {isUploadPage ? <div className="App">{children}</div> : children}
    </main>
  );
}

function App() {
  return (
    <Router>
      
      <div className="page-layout">
        <Header />
        
        <LayoutWrapper>
          <Routes>
            <Route path="/" element={<FormValidation />} />
            <Route path="/files" element={<UploadedFilesList />} />
            <Route path= "/login" element={<LoginSignup/>} />
          </Routes>
        </LayoutWrapper>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
