import classes from './photo.module.css';

function Photo(props) {
    return <img className={classes.photoImg} src={props.src} alt="Maria And Alex"/>
}

export default Photo;