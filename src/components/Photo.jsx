import classes from "./Photo.module.css";
import PropTypes from "prop-types";

function Photo({ src, alt }) {

    const errorHandler = ({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.style = "display: none";
    }

    return <img className={classes.photoImg} src={src} alt={alt} onError={errorHandler} />
}

Photo.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
}

export default Photo;