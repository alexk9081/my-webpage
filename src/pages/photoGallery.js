import PhotoColumn from "../components/photoColumn";
import Photo from '../components/photo.js'
import classes from './photoGallery.module.css';

import { useState, useEffect, useRef } from 'react';

import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

function GalleryPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [picElements, setPicElements] = useState([]);
    const picElemRef = useRef(picElements);

    //Get image urls from database
    useEffect(() => { picElemRef.current = picElements })
    useEffect(() => {
        //Ensure loading page is shown while database is queried
        setIsLoading(true);

        //Set up firebase connection
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
        var storageRef = ref(storage, 'anm');

        listAll(storageRef).then(function (result) {
            const allPromises = result.items.map((input) => {
                return getDownloadURL(ref(storage, input))
            })

            for (const promise of allPromises) {
                promise.then((url) => {
                    const mapping = <Photo key={url} src={url} />;
                    setPicElements(oldArray => [...oldArray, mapping]);
                })
                    .catch(function (error) {
                        console.log(error);
                    })
            }
        })
            .catch(function (error) {
                console.log(error);
            });

        setIsLoading(false);
    }, []);

    //Return loading page while database is being queried
    if (isLoading) {
        return <div>
            Filler for loading page
        </div>
    }

    return <div className={classes.photosBox} id='main'>
        <PhotoColumn>
            {picElements}
        </PhotoColumn>

        <PhotoColumn>
            {picElements}
        </PhotoColumn>

        <PhotoColumn>
            {picElements}
        </PhotoColumn>
    </div>
}

export default GalleryPage;