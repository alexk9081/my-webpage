import { useState } from 'react';
import classes from "./addPicturesPage.module.css";
import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebaseConfig"

function AddPicture() {
    const [selectedFile, setSelectedFile] = useState(null);


    let onFileChange = event => {
        // Update the state
        setSelectedFile(event.target.files[0]);
    };

    let onFileUpload = () => {
        if (selectedFile == null) {
            console.log("No file selected");
            return;
        }
        const metadata = {
            contentType: selectedFile.type
        };

        const storageRef = ref(storage, 'anm/' + selectedFile.name);
        const uploadTask = uploadBytesResumable(storageRef, selectedFile, metadata);

        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        console.log("An error occured");
                        break;
                }
            },
            (error) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        console.log("Upload not authorized");
                        break;
                    case 'storage/canceled':
                        console.log("Upload canceled");
                        break;
                    case 'storage/unknown':
                        console.log("Unknown error occurred, inspect error.serverResponse");
                        break;
                    default:
                        console.log("An error occured");
                        break;
                }
            }
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
                    <p className={classes.general}>Last Modified: {selectedFile.lastModifiedDate.toDateString()}</p>
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
            <input type="file" accept=".mov,.png,.jpg,.jpeg" onChange={onFileChange} className={classes.fileUpload} />
            <button onClick={onFileUpload} className={classes.button}>
                Upload!
            </button>
        </div>
        {fileData()}
    </div>
}

export default AddPicture;