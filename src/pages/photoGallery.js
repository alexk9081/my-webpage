import PhotoColumn from "../components/photoColumn";
import Photo from '../components/photo.js'
import classes from './photoGallery.module.css';

import { useState, useEffect, useRef } from 'react';

import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

function GalleryPage() {
    const [isLoading, setIsLoading] = useState(true);

    const [firstPicElements, setFirstPicElements] = useState([]);
    const [secondPicElements, setSecondPicElements] = useState([]);
    const [thirdPicElements, setThirdPicElements] = useState([]);

    //References so useEffect doesnt cause infinie loop
    const firstPicElemRef = useRef(firstPicElements);
    const secondPicElemRef = useRef(secondPicElements);
    const thirdPicElemRef = useRef(thirdPicElements);

    //Get image urls from database
    useEffect(() => {
        firstPicElemRef.current = firstPicElements;
        secondPicElemRef.current = secondPicElements;
        thirdPicElemRef.current = thirdPicElements;
    })
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

        //Get all image urls from database
        const app = initializeApp(firebaseConfig);
        const storage = getStorage(app);
        var storageRef = ref(storage, 'anm');

        function pageController() {
            setIsLoading(false);
        }

        listAll(storageRef).then(function (result) {
            const allPromises = result.items.map((input) => {
                return getDownloadURL(ref(storage, input))
            })

            //Map each url to photo object and add it to next column
            for (let i = 0; i < allPromises.length; i++) {
                const promise = allPromises[i];

                promise.then((url) => {
                    const mappedComponent = <Photo key={url} src={url} onLoad={pageController()} />;
                    if (i % 3 === 0) {
                        setFirstPicElements(oldArray => [...oldArray, mappedComponent]);
                    }
                    else if (i % 3 === 1) {
                        setSecondPicElements(oldArray => [...oldArray, mappedComponent]);
                    }
                    else {
                        setThirdPicElements(oldArray => [...oldArray, mappedComponent]);
                    }

                })
                    .catch(function (error) {
                        console.log(error);
                    })
            }
        })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    //Return loading page while database is being queried
    if (isLoading) {
        return <div className={classes.loading}>
            Please Wait, page is loading...
        </div>
    }

    return <div className={classes.photosBox} id='main'>
        <PhotoColumn>
            {firstPicElements}
        </PhotoColumn>

        <PhotoColumn>
            {secondPicElements}
        </PhotoColumn>

        <PhotoColumn>
            {thirdPicElements}
        </PhotoColumn>
    </div>
}

export default GalleryPage;