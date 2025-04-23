import React, { useState } from 'react';
import UploadForm from './UploadedFiles';
import UploadedFiles from './UploadedFiles';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('upload');

  return (
    <div className="App">
      <div className="tab-buttons">
        <button
          className={activeTab === 'upload' ? 'active' : ''}
          onClick={() => setActiveTab('upload')}
        >
          Upload
        </button>
        <button
          className={activeTab === 'browse' ? 'active' : ''}
          onClick={() => setActiveTab('browse')}
        >
          Browse
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'upload' ? <UploadForm /> : <UploadedFiles />}
      </div>
    </div>
  );
}

export default App;

