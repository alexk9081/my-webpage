import classes from "./blogPost.module.css";

function BlogPost() {

    function getCurrentTimeAndDate() {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
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

        return `${monthName} ${day}, ${year} @ ${hours}:${minutes} ${ampm}`;
    }

    return <div className={classes.post}>
        <h2  className={classes.title}>
            Lorem Ipsum Dolor
        </h2>
        <h3 className={classes.date}>
            {getCurrentTimeAndDate()}
        </h3>
        <hr className={classes.sectionBreak}/>
        <p className={classes.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <hr className={classes.sectionBreak}/>
        <h4 className={classes.signatureTitle}>
            Signature
        </h4>
        <p className={classes.signatureBody}>
            Whats poppin'
        </p>
    </div>
}

export default BlogPost;