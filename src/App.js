<<<<<<< HEAD
import UploadFormValidated from './UploadFormValidated';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import UploadForm from './UploadedFiles';
>>>>>>> bfeee46beef3ec64692fdc0efbf7b0c77efc712e
import UploadedFilesList from './UploadedFilesList';
import Header from './Header';
import Footer from './Footer';
import './App.css';
<<<<<<< HEAD
=======

>>>>>>> bfeee46beef3ec64692fdc0efbf7b0c77efc712e
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
<<<<<<< HEAD
          <Route path="/" element={<UploadFormValidated />} />
          <Route path="/files" element={<UploadedFilesList />} />
=======
            <Route path="/" element={<UploadForm />} />
            <Route path="/files" element={<UploadedFilesList />} />
>>>>>>> bfeee46beef3ec64692fdc0efbf7b0c77efc712e
          </Routes>
        </LayoutWrapper>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
