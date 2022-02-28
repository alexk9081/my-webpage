import classes from './photo.module.css';

function Photo(props) {

    function errorHandler({ currentTarget }) {
        currentTarget.onerror = null;
        currentTarget.style = "display: none";
    }

    return <img className={classes.photoImg} src={props.src} alt="Maria and Alex" onError={errorHandler} />
}

export default Photo;