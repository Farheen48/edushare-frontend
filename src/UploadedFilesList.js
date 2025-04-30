import React, { useEffect, useState } from 'react';

function UploadedFilesList() {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0); // start from 0
    const [pageSize, setPageSize] = useState(2); // Placeholder, it will come from the backend
    const [totalPages, setTotalPages] = useState(0);
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


    useEffect(() => {
        setLoading(true);
        fetch(`${API_BASE_URL}/files/list?page=${page}&size=${pageSize}`)
            .then(response => response.json())
            .then(data => {
                console.log('Backend returned:', data);
                setFiles(data.content || []);
                setTotalPages(data.totalPages || 1);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching files:', error);
                setLoading(false);
            });
    }, [page, pageSize]);


    // For Download functionality
    const handleDownload = async (fileName) => {
        try {
            const response = await fetch(`${API_BASE_URL}/files/download?fileName=${fileName}`, {
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
            window.URL.revokeObjectURL(downloadUrl);
        } catch (error) {
            alert('Error downloading file: ' + error.message);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Uploaded Files</h2>
            {loading ? (
                <div>Loading files...</div>
            ) : files.length === 0 ? (
                <div>No files uploaded yet.</div>
            ) : (
                <>
                    <div style={{ marginBottom: '10px' }}>
                        <label htmlFor="pageSizeSelect">Show:&nbsp;</label>
                        <select
                            id="pageSizeSelect"
                            value={pageSize}
                            onChange={(e) => {
                                setPageSize(parseInt(e.target.value));
                                setPage(0); 
                            }}
                        >
                            <option value={2}>2</option>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                        </select>
                        <span>&nbsp;items per page</span>
                    </div>




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
                                        <button onClick={() => handleDownload(file.fileName)}
                                            style={{ color: 'blue', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}>
                                            Download
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div style={{ marginTop: '20px' }}>
                        <button disabled={page === 0} onClick={() => setPage(page - 1)}>Previous</button>
                        <span style={{ margin: '0 10px' }}>Page {page + 1} of {totalPages}</span>
                        <button disabled={page >= totalPages - 1} onClick={() => setPage(page + 1)}>Next</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default UploadedFilesList;