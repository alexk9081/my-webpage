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

    const firstColHeightRef = useRef();
    const secondColHeightRef = useRef();
    const thirdColHeightRef = useRef();


    //Get image urls from database
    useEffect(() => { 
        firstPicElemRef.current = firstPicElements; 
        secondPicElemRef.current = secondPicElements; 
        thirdPicElemRef.current = thirdPicElements; })
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

        listAll(storageRef).then(function (result) {
            const allPromises = result.items.map((input) => {
                return getDownloadURL(ref(storage, input))
            })
            
            //Map each url to photo object and add it to shortest column
            for (const promise of allPromises) {
                promise.then((url) => {
                    function getMeta(url) {
                        var img = new Image();
                        img.src = url;
                        img.onload = function() { console.log(this.width); };
                    }
                    getMeta(url);

                    const mappedComponent = <Photo key={url} src={url} />;
                    console.log(firstColHeightRef.current.clientHeight +":"+ secondColHeightRef.current.clientHeight +":"+ thirdColHeightRef.current.clientHeight );
                    if(firstColHeightRef.current.clientHeight <= secondColHeightRef.current.clientHeight && firstColHeightRef.current.clientHeight <= thirdColHeightRef.current.clientHeight){
                        setFirstPicElements(oldArray => [...oldArray, mappedComponent]);
                    }
                    else if (secondColHeightRef.current.clientHeight <= thirdColHeightRef.current.clientHeight) {
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

        setIsLoading(false);
    }, []);

    //Return loading page while database is being queried
    if (isLoading) {
        return <div>
            Filler for loading page
        </div>
    }

    return <div className={classes.photosBox} id='main'>
        <PhotoColumn ref={firstColHeightRef}>
            {firstPicElements}
        </PhotoColumn>

        <PhotoColumn ref={secondColHeightRef}>
            {secondPicElements}
        </PhotoColumn>

        <PhotoColumn ref={thirdColHeightRef}>
            {thirdPicElements}
        </PhotoColumn>
    </div>
}

export default GalleryPage;