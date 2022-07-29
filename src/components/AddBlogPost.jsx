import classes from "./AddBlogPost.module.css";

function AddBlogPost(props) {
    const submitPost = () => {}
    const setTitle = () => {}
    const setBody = () => {}

    return (
        <div>
            <input className={classes.titleInput} onChange={(newTitleInput) => { setTitle(newTitleInput.target.value) }} type="text" placeholder="Title" />
            <textarea className={classes.bodyInput} onChange={(newBodyInput) => { setBody(newBodyInput.target.value) }} type="text" placeholder="Body" />
            <input className={classes.submit} onClick={() => { submitPost() }} type="submit" />
        </div>
    )
}

export default AddBlogPost;