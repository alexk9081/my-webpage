import classes from "./AddInfoPage.module.css";

function AddInfoPage() {
    return <div className={classes.addPostPage}>
        <input className={classes.input} type="text" placeholder="test"/>
        <input className={classes.input} type="text" placeholder="test"/>
        <input className={classes.input} type="color"/>
        <input className={classes.input} type="email" placeholder="email@email.com"/>
        <input className={classes.submit} type="submit"/>
    </div>
}

export default AddInfoPage;