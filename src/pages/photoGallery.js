import PhotoColumn from "../components/photoColumn";
import Photo from '../components/photo.js'
import classes from './photoGallery.module.css';

import { useState, useEffect, useMemo, useRef } from 'react';

import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

function GalleryPage() {
    const [isLoading, setIsLoading] = useState(true);

    const elements = useMemo(() => [], []);

    const num = useRef(0);
    
    //Get image urls from database
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
            result.items.map((input) => {
                return getDownloadURL(ref(storage, input))
            })
                .forEach(promise => {
                    num.current += 1; 
                    promise.then(url => {
                        elements.push(<Photo src={url}/>);
                        if(elements.length)
                        console.log(elements);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })  
                })
        })
            .catch(function (error) {
                console.log(error);
            });

        setIsLoading(false);
    }, [elements]);

    //Return loading page while database is being queried
    if (isLoading) {
        return <div>
            Filler for loading page
        </div>
    }

    return <div className={classes.photosBox} id='main'>
        <PhotoColumn>
            {elements}
        </PhotoColumn>
        <PhotoColumn>
            {/* {<div>{num}</div>} */}
        </PhotoColumn>
        <PhotoColumn>
            
        </PhotoColumn>
    </div>
}

export default GalleryPage;