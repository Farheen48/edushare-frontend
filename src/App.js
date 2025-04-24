import React, { useState } from 'react';
import UploadForm from './UploadedFiles';           //  upload form
import UploadedFilesList from './UploadedFilesList'; //  file list view
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('upload');

  return (
    <div className="App">
      <h1>EduShare File Upload</h1>

      <div className="tab-buttons" style={{ marginBottom: '20px' }}>
        <button onClick={() => setActiveTab('upload')} style={{ marginRight: '10px' }}>
          Upload File
        </button>
        <button onClick={() => setActiveTab('list')}>
          View Uploaded Files
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'upload' ? <UploadForm /> : <UploadedFilesList />}
      </div>
    </div>
  );
}

export default App;
