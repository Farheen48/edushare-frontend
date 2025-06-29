import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import FormValidation from './FormValidation';
import UploadedFilesList from './UploadedFilesList';
import { LoginSignup } from './Components/LoginSignup/LoginSignup';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import FileDetails from './FileDetails';
import UserProfile from './UserProfile';


// LayoutWrapper to conditionally wrap the upload page
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

       <Routes>
  {/* Wrap only upload page with App class via LayoutWrapper */}
  <Route
    path="/"
    element={
      <LayoutWrapper>
        <FormValidation />
      </LayoutWrapper>
    }
  />
  <Route
    path="/files"
    element={
      <LayoutWrapper>
        <UploadedFilesList />
      </LayoutWrapper>
    }
  />
  <Route
    path="/file/:id"
    element={
      <LayoutWrapper>
        <FileDetails />
      </LayoutWrapper>
    }
  /> 
  
  {/* ✅ New Profile Route */}
  <Route
    path="/profile"
    element={
      <LayoutWrapper>
        <UserProfile />
      </LayoutWrapper>
    }
  />
  
</Routes>

        <Footer />
      </div>
    </Router>
  );
}


export default App;
