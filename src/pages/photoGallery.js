import PhotoColumn from "../components/photoColumn";
import classes from './photoGallery.module.css';

import { useState, useEffect } from 'react';

import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, list } from "firebase/storage";
import Photo from "../components/photo";


function GalleryPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [picture, setPicture] = useState([]);
    // const [returnedPictures, setReturnedPictures] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        const firebaseConfig = {
          apiKey: "AIzaSyAqJg-fe3fayu8xapocNCJSzKm4XGhzq5E",
          authDomain: "personalwebsite-51254.firebaseapp.com",
          projectId: "personalwebsite-51254",
          storageBucket: "personalwebsite-51254.appspot.com",
          messagingSenderId: "32709056754",
          appId: "1:32709056754:web:3a1cefca604f4be665586b"
        };
        const app = initializeApp(firebaseConfig);
        const storage = getStorage(app);

        // const listRef = ref(storage, "anm");
        // const firstPage = list(listRef, { maxResults: 100 });
        
        // setReturnedPictures(firstPage.items);

        getDownloadURL(ref(storage, 'anm/1E9FFE32-FD68-4B4D-93AF-E0B2890B5FFD.jpeg'))
        .then((url) => {
            setPicture(url);
            setIsLoading(false);
        })
        .catch((error) => {
        });

    }, []);

    if (isLoading) {
        return <div>
            Filler for loading page
        </div>
    }

    return <div className={classes.photosBox}>
        <div>
            <Photo src={picture}/>
        </div>
        <PhotoColumn />
        <PhotoColumn />
        <PhotoColumn />
    </div>
}

export default GalleryPage;