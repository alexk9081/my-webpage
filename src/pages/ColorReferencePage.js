import Color from "../components/Color";
import classes from "./ColorReferencePage.module.css";

function ColorReferencePage() {
    return <div className={classes.colorRefPage}>
        <div className={classes.sizeWrapper}>
            <Color colorHex="#fff" />
            <Color colorHex="#888" dark={true} />
            <Color colorHex="#111" dark={true} />
            <Color colorHex="#000" dark={true} />
            <Color colorHex="#1a1c25" dark={true} /> 
            <Color colorHex="#424552" dark={true} />
            <Color colorHex="#1a2458" dark={true} />
        </div>
    </div>
}

export default ColorReferencePage;