import Input from '../inputBox'
import classes from './postForm.module.css';

function PostForm() {
    return <div className={classes.form}>
        <form className={classes.post}>
            <Input id="Test" label="Full Name" placeHolder="John Doe" />
            <Input id="Test2" label="Phone Number" placeHolder="(123) 456-7890" />
            <Input id="Test3" label="Email" placeHolder="doejohn@gmail.com" />
        </form>
        <button className={classes.submit}>Submit</button>
    </div>
}

export default PostForm;