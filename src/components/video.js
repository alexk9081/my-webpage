import classes from './video.module.css'

function Video(props) {
    return <video src={props.src} className={classes.vid}>
        {/* <source  type="video/mov"  /> */}
        Your browser does not support the video tag.
    </video>
}

export default Video;