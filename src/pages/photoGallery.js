import PhotoColumn from "../components/PhotoColumn";
import Photo from "../components/Photo"
import classes from "./PhotoGallery.module.css";
import { useState, useEffect, useRef } from "react";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../firebaseConfig";

function PhotoGallery() {
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

        var storageRef = ref(storage, 'anm');

        function pageController() {
            setIsLoading(false);
        }

        listAll(storageRef)
            .then((result) => {
                const allPromises = result.items.map((input) => {
                    return getDownloadURL(ref(storage, input))
                })

                //Map each url to photo object and add it to next column
                for (let i = 0; i < allPromises.length; i++) {
                    const promise = allPromises[i];

                    promise.then((url) => {
                        const mappedComponent = <Photo key={url} src={url} alt="Alex and Maria" onLoad={pageController()} />;
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

    return (
        <div className={classes.galleryPage}>
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
    )
}

export default PhotoGallery;