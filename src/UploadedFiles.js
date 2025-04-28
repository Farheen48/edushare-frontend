import React, { useState } from 'react';
import './App.css'; // Keep using this CSS file

function UploadForm() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [courseName, setCourseName] = useState('');
  const [instructor, setInstructor] = useState('');
  const [department, setDepartment] = useState('');
  const [semester, setSemester] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!file) {
      alert("Please select a file before submitting.");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("courseCode", courseCode);
    formData.append("courseName", courseName);
    formData.append("instructor", instructor);
    formData.append("department", department);
    formData.append("semester", semester);
    formData.append("tags", tags);
  
    try {
      const response = await fetch("http://localhost:8081/files/upload", {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        alert("File uploaded successfully!");
      } else {
        const error = await response.text();
        alert("Upload failed: " + error);
      }
    } catch (err) {
      console.error("Error uploading file:", err);
      alert("Something went wrong. See console for details.");
    }
  };  

  return (
    <div className="upload-form">
      <h2>Upload Study Material</h2>
      <form onSubmit={handleSubmit}>
      
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Course Code (e.g., CSE-221)" value={courseCode} onChange={(e) => setCourseCode(e.target.value)} />
        <input type="text" placeholder="Course Name" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
        <input type="text" placeholder="Instructor Name" value={instructor} onChange={(e) => setInstructor(e.target.value)} />
        <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />
        <input type="text" placeholder="Semester (e.g., Fall 2024)" value={semester} onChange={(e) => setSemester(e.target.value)} />
        <input type="text" placeholder="Tags (comma separated)" value={tags} onChange={(e) => setTags(e.target.value)} />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default UploadForm;
