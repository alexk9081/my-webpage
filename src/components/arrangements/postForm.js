import Input from '../inputBox'
import classes from './postForm.module.css';

function PostForm() {
    return <div className={classes.form}>
        <form className={classes.post}>
            <Input id="title" label="Title" placeHolder="My First Post" />
            <Input id="description" label="Description" placeHolder="I did this today." />
            <Input id="user" label="Username" placeHolder="KeoA" />
        </form>
        <button className={classes.submit}>Submit</button>
    </div>
}

export default PostForm;