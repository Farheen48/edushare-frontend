import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const user = {
    name: "Farheen",
    studentId: "0122430035",
    email: "zamanfarheen48@gmail.com",
    uploadedFiles: 5
  };

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
      <div className="profile-item"><span>Name:</span> {user.name}</div>
      <div className="profile-item"><span>Student ID:</span> {user.studentId}</div>
      <div className="profile-item"><span>Email:</span> {user.email}</div>
      <div className="profile-item"><span>Total Uploaded Files:</span> {user.uploadedFiles}</div>
    </div>
  );
};

export default UserProfile;
