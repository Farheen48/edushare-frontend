import React, { useState } from 'react';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [instructor, setInstructor] = useState('');
  const [semester, setSemester] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can log or send this to backend
    console.log({
      file,
      title,
      courseCode,
      instructor,
      semester,
      tags,
    });

    alert("Form submitted! Check console for data.");
  };

  return (
    <div className="App">
      <h2>Upload Study Material</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />

        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Course Code (e.g., CSE-221)" value={courseCode} onChange={(e) => setCourseCode(e.target.value)} />
        <input type="text" placeholder="Instructor Name" value={instructor} onChange={(e) => setInstructor(e.target.value)} />
        <input type="text" placeholder="Semester (e.g., Fall 2024)" value={semester} onChange={(e) => setSemester(e.target.value)} />
        <input type="text" placeholder="Tags (comma separated)" value={tags} onChange={(e) => setTags(e.target.value)} />

        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default App;

