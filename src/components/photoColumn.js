import classes from './photoColumn.module.css'
import Photo from './photo.js'

function photoColumn(props) {
    var photoSet = [];

    for(var img in props.photoSet){
        photoSet.push(img);
    }

    return <div className={classes.column}>
    {
        photoSet.map(val => {
            return <Photo src={val}  key={val} />
        })
    }
    </div>
}

export default photoColumn;