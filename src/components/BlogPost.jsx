import classes from "./BlogPost.module.css";
import PropTypes from "prop-types";
import { Timestamp } from "firebase/firestore";

function BlogPost({ title, time, description, userName, userImg }) {
    const convSecToTime = (secs) => {
        const date = new Date(secs * 1000);
        const month = date.getMonth() + 1;
        let hours = date.getHours();
        let minutes = date.getMinutes();

        //Convert minutes and hours to am/pm
        let ampm = "am";
        if (hours > 12) {
            ampm = "pm";
            hours -= 12;
        }
        if (hours === 0) {
            hours = 12;
        }

        //Convert minutes to double digits
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        //Convert month number into name
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const monthName = monthNames[month - 1];

        return `${monthName} ${date.getDate()}, ${date.getFullYear()} @ ${hours}:${minutes} ${ampm}`;
    }

    return (
        <div className={classes.post}>
            <h1 className={classes.postDivider}>•••</h1>
            <h2 className={classes.title}>
                {title}
            </h2>
            <h3 className={classes.date}>
                {convSecToTime(time)}
            </h3>
            <hr className={classes.sectionBreakLine} />
            <p className={classes.desc}>
                {description}
            </p>
            <hr className={classes.sectionBreakLine} />
            <img className={classes.userImg} src={userImg} alt="Poster" referrerPolicy="no-referrer" />
            <h4 className={classes.userName} >{userName}</h4>
        </div>
    )
}

BlogPost.defaultProps = {
    time: Timestamp.fromDate(new Date()).seconds
}

BlogPost.propTypes = {
    title: PropTypes.string.isRequired,
    time: PropTypes.string,
    description: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userImg: PropTypes.string.isRequired
}

export default BlogPost;