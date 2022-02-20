import classes from './photoColumn.module.css'
import Photo from './photo.js'

function photoColumn(props) {
    var photoSet = [];
    var keyNum = 0;

    for(var img in props.photoSet){
        console.log("added element to photos");
        photoSet.push(<Photo src={img}  key={keyNum} />);
        keyNum++;
    }

    return <div className={classes.column}>
    {
        photoSet
    }
    </div>
}

export default photoColumn;