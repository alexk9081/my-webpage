import { useState } from 'react';


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
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        // Request made to the backend api
        // Send formData object
        axios.post("api/uploadfile", formData);
    };

    // File content to be displayed after
    // file upload is complete
    let fileData = () => {
        if (this.state.selectedFile) {
            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>
                    <p>File Type: {this.state.selectedFile.type}</p>
                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
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
            <input type="file" onChange={this.onFileChange} />
            <button onClick={this.onFileUpload}>
                Upload!
            </button>
        </div>
        {this.fileData()}
    </div>
}

export default AddPicture;