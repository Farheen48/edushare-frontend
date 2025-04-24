import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UploadForm from './UploadedFiles';
import UploadedFilesList from './UploadedFilesList';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <main style={{ padding: '20px', minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<UploadForm />} />
            <Route path="/files" element={<UploadedFilesList />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
