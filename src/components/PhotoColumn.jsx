import classes from "./PhotoColumn.module.css";

function PhotoColumn(props) {

    return (
        <div className={classes.column}>
            {props.children}
        </div>
    )
}

export default PhotoColumn;