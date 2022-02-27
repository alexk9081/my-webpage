import { forwardRef } from 'react';
import classes from './photoColumn.module.css';

function PhotoColumn(props, ref) {

    return <div className={classes.column} ref={ref}>
        {props.children}
    </div>
}

const FwdPhotoColumn = forwardRef(PhotoColumn);

export default FwdPhotoColumn;