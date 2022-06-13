import Input from '../inputBox'
import classes from './blogPostForm.module.css';

function PostForm() {
    function getInputsFromForm(){
        console.log("getInputsFromForm");
        const inputs = document.querySelectorAll(`.post`);
        const inputsArray = [];
        inputs.forEach(input => {
            console.log("added item to array");
            inputsArray.push(input.value);
            console.log(input.value);
        });
        return inputsArray;
    }

    return <div className={classes.form}>
        <form className={classes.post}>
            <Input className="input" id="title" label="Title" placeHolder="My First Post" />
            <Input className="input" id="description" label="Description" placeHolder="I did this today." />
            <Input className="input" id="user" label="Username" placeHolder="KeoA" />
        </form>
        <button className={classes.submit} onClick={getInputsFromForm}>Submit</button>
    </div>
}

export default PostForm;