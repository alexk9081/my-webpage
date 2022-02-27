import classes from './photo.module.css';

function Photo(props) {
    return <img className={classes.photoImg} src={props.src} alt="Maria and Alex"/>
}

export default Photo;