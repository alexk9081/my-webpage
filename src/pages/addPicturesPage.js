import { useState } from 'react';
import axios from 'axios';

function AddPicture() {
    const [selectedFile, setSelectedFile] = useState(null);

    let onFileChange = event => {
        // Update the state
        setSelectedFile(event.target.files[0]);
    };

    let onFileUpload = () => {
        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "uploadedImage",
            selectedFile,
            selectedFile.name
        );

        // Request made to the backend api
        // Send formData object
        axios.post("api/uploadfile", formData);
    };

    // File content to be displayed after
    // file upload is complete
    let fileData = () => {
        if (selectedFile) {
            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {selectedFile.name}</p>
                    <p>File Type: {selectedFile.type}</p>
                    <p>
                        Last Modified:{" "}
                        {selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };

    return <div>
        <h3>
            File Upload using React!
        </h3>
        <div>
            <input type="file" accept=".mov,.png,.jpg,.jpeg" onChange={onFileChange} />
            <button onClick={onFileUpload}>
                Upload!
            </button>
        </div>
        {fileData()}
    </div>
}

export default AddPicture;