import InputBox from "../InputBox";
import classes from "./BlogPostForm.module.css";

function BlogPostForm() {
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
            <InputBox className="input" id="title" label="Title" placeHolder="My First Post" />
            <InputBox className="input" id="description" label="Description" placeHolder="I did this today." />
            <InputBox className="input" id="user" label="Username" placeHolder="KeoA" />
        </form>
        <button className={classes.submit} onClick={getInputsFromForm}>Submit</button>
    </div>
}

export default BlogPostForm;