import classes from './photo.module.css';

function Photo(props) {
    return <img className={classes.photoImg} src={props.src} alt="Placeholder"/>
}

export default Photo;