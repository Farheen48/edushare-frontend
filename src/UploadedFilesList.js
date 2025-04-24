import React, { useEffect, useState } from 'react';

function UploadedFilesList() {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8081/files/list')
            .then(response => response.json())
            .then(data => {
                setFiles(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching files:', error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading files...</div>;
    if (files.length === 0) return <div>No files uploaded yet.</div>;

    // For Download functionality
    const handleDownload = async (fileName) => {
        try {
            const response = await fetch(`http://localhost:8081/files/download?fileName=${fileName}`, {
                method: 'GET',
            });

            if (!response.ok) throw new Error('Download failed');

            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(downloadUrl); // Cleanup
        } catch (error) {
            alert('Error downloading file: ' + error.message);
        }
    };


    return (
        <div style={{ padding: '20px' }}>
            <h2>Uploaded Files</h2>
            <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Course</th>
                        <th>Instructor</th>
                        <th>Semester</th>
                        <th>Department</th>
                        <th>Tags</th>
                        <th>Uploaded At</th>
                        <th>Download</th>
                    </tr>
                </thead>
                <tbody>
                    {files.map(file => (
                        <tr key={file.id}>
                            <td>{file.title}</td>
                            <td>{file.courseCode} - {file.courseName}</td>
                            <td>{file.instructor}</td>
                            <td>{file.semester}</td>
                            <td>{file.department}</td>
                            <td>{file.tags}</td>
                            <td>{new Date(file.uploadedAt).toLocaleString()}</td>
                            <td>
                                <button onClick={() => handleDownload(file.fileName)} style={{ color: 'blue', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}>
                                    Download
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UploadedFilesList;
