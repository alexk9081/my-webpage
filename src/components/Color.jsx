import classes from "./Color.module.css";

function Color(props) {
    function copyToClipboard() {
        navigator.clipboard.writeText(props.colorHex);
    }

    return <>
    <div 
        className={props.dark ? classes.colorBoxDark : classes.colorBox} 
        style={{backgroundColor: props.colorHex}} 
        onClick={copyToClipboard}
    >
        <h1 
            className={classes.colorText} 
            style={{color: props.dark ? "#fff" : "#000"}}
        >
            {props.colorHex}
        </h1>
    </div>
    </>
}

export default Color