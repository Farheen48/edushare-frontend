import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const mockFile = {
  id: "1",
  title: "Machine Learning Lecture 1",
  uploadedBy: "Farheen",
  uploadedAt: "2025-06-23T10:00:00Z",
  fileSize: 5.2,
  courseName: "Machine Learning",
  courseCode: "CSE5001",
  instructor: "Dr. Rafiq",
  semester: "Summer 2025",
  department: "Computer Science",
  tags: "AI,ML,Supervised Learning",
};

const mockComments = [
  { user: "Zareen", text: "Great notes!" },
  { user: "Afiah", text: "Thanks for sharing!" },
];

function FileDetails() {
  const { id } = useParams();
  const [file, setFile] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    // Mock fetch logic
    if (id === mockFile.id) {
      setFile(mockFile);
      setComments(mockComments);
    }
  }, [id]);

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([...comments, { user: "Anonymous", text: newComment }]);
      setNewComment("");
    }
  };

  if (!file) return <p>Loading file information...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>📁 {file.title}</h2>
      <p><strong>Uploaded By:</strong> {file.uploadedBy}</p>
      <p><strong>Uploaded At:</strong> {new Date(file.uploadedAt).toLocaleString()}</p>
      <p><strong>File Size:</strong> {file.fileSize} MB</p>
      <p><strong>Course:</strong> {file.courseName} ({file.courseCode})</p>
      <p><strong>Instructor:</strong> {file.instructor}</p>
      <p><strong>Semester:</strong> {file.semester}</p>
      <p><strong>Department:</strong> {file.department}</p>
      <p><strong>Tags:</strong> {file.tags.split(',').map(tag => <span key={tag} style={{ marginRight: "5px" }}>#{tag.trim()}</span>)}</p>

      <hr />
      <h3>📝 Comments</h3>
      <input
        type="text"
        placeholder="Write your comment..."
        value={newComment}
        onChange={e => setNewComment(e.target.value)}
        style={{ width: "70%", padding: "8px" }}
      />
      <button onClick={handleCommentSubmit} style={{ marginLeft: "10px" }}>Post</button>

      <ul style={{ marginTop: "20px" }}>
        {comments.map((comment, index) => (
          <li key={index}><strong>{comment.user}:</strong> {comment.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default FileDetails;
