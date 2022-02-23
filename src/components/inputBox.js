// import classes from './inputBox.module.css';

function Input(props) {
    return <div>
        <label><b>{props.label}: </b></label> 
        <br/>
        <input type="text" id={props.id} placeholder={props.placeHolder} />
    </div>
}

export default Input;