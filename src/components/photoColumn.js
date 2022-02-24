import classes from './photoColumn.module.css'
import Photo from './photo.js'
import { useEffect, useState } from 'react';

function PhotoColumn(props) {
    const [photoSet, setPhotoSet] = useState([]);

    useEffect(() => {
        if(props.photoSet !== undefined && photoSet !== props.photoSet){
            let urlArr = [];
            props.photoSet.forEach(promise => {
                promise.then(url => (urlArr.push(url)))
            })
        }
    }, [props.photoSet, photoSet])

    return <div className={classes.column}>
        <Photo />
        {
            // console.log(photoSet)
            // photoSet.map((url) => {
            //     return <div key={url}>{url}</div>
            // })
        }
    </div>
}

export default PhotoColumn;