import { useEffect, useRef } from 'react';
import classes from './photoColumn.module.css'

function PhotoColumn(props) {
    const height = useRef();
    
    useEffect(() => {
        console.log(height.current.clientHeight);
    }, [props.children])

    return <div className={classes.column} ref={height}>
        {props.children}
    </div>
}

export default PhotoColumn;