import { useState } from 'react';
import classes from "./addPicturesPage.module.css";

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
    };

    // File content to be displayed after
    // file upload is complete
    let fileData = () => {
        if (selectedFile) {
            return (
                <div>
                    <h2 className={classes.general}>File Details:</h2>
                    <p className={classes.general}>File Name: {selectedFile.name}</p>
                    <p className={classes.general}>File Type: {selectedFile.type}</p>
                    <p className={classes.general}>
                        Last Modified:{" "}
                        {selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4 className={classes.general}>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };

    return <div>
        <h3 className={classes.title}>
            File Upload
        </h3>
        <div className={classes.uploadItems}>
            <input type="file" accept=".mov,.png,.jpg,.jpeg" onChange={onFileChange} className={classes.fileUpload}/>
            <button onClick={onFileUpload} className={classes.button}>
                Upload!
            </button>
        </div>
        {fileData()}
    </div>
}

export default AddPicture;