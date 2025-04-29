import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css'; // Use your existing CSS

function FormValidation() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('file', data.file[0]);
      formData.append('title', data.title);
      formData.append('courseCode', data.courseCode);
      formData.append('courseName', data.courseName);
      formData.append('instructor', data.instructor);
      formData.append('department', data.department);
      formData.append('semester', data.semester);
      formData.append('tags', data.tags);

      const response = await fetch('http://localhost:8080/files/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('File uploaded successfully!');
        reset(); // Clear the form after successful upload
      } else {
        const errorText = await response.text();
        alert('Upload failed: ' + errorText);
      }
    } catch (err) {
      console.error('Error uploading file:', err);
      alert('Something went wrong. See console for details.');
    }
  };

  return (
    <div className="upload-form">
      <h2>Upload Study Material (Validated)</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <input
          type="text"
          placeholder="Title"
          {...register('title', { required: 'Title is required' })}
        />
        {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}

        <input
          type="text"
          placeholder="Course Code (e.g., CSE-221)"
          {...register('courseCode', { required: 'Course Code is required' })}
        />
        {errors.courseCode && <p style={{ color: 'red' }}>{errors.courseCode.message}</p>}

        <input
          type="text"
          placeholder="Course Name"
          {...register('courseName', { required: 'Course Name is required' })}
        />
        {errors.courseName && <p style={{ color: 'red' }}>{errors.courseName.message}</p>}

        <input
          type="text"
          placeholder="Instructor Name"
          {...register('instructor', { required: 'Instructor Name is required' })}
        />
        {errors.instructor && <p style={{ color: 'red' }}>{errors.instructor.message}</p>}

        <input
          type="text"
          placeholder="Department"
          {...register('department', { required: 'Department is required' })}
        />
        {errors.department && <p style={{ color: 'red' }}>{errors.department.message}</p>}

        <input
          type="text"
          placeholder="Semester (e.g., Fall 2024)"
          {...register('semester', { required: 'Semester is required' })}
        />
        {errors.semester && <p style={{ color: 'red' }}>{errors.semester.message}</p>}

        <input
          type="text"
          placeholder="Tags (comma separated)"
          {...register('tags')}
        />

        <input
          type="file"
          {...register('file', { required: 'Please select a file' })}
        />
        {errors.file && <p style={{ color: 'red' }}>{errors.file.message}</p>}

        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default FormValidation;
