import classes from "./inputBox.module.css";

function Input(props) {
    return <div>
        <label className={classes.inputName}><b>{props.label}: </b></label> 
        <br/>
        <input type="text" className={classes.textBox} id={props.id} placeholder={props.placeHolder} />
    </div>
}

export default Input;