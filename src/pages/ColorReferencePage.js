import Color from "../components/Color";
import HiddenScrollDiv from "../components/HiddenScrollDiv";
import classes from "./ColorReferencePage.module.css";

function ColorReferencePage() {
    return (
        <div className={classes.colorRefPage}>
            <HiddenScrollDiv contentClass={classes.sizeWrapper}>
                {/* <div className={classes.sizeWrapper}> */}
                    <Color colorHex="#fff" />
                    <Color colorHex="#888" isDark={true} />
                    <Color colorHex="#222" isDark={true} />
                    <Color colorHex="#111" isDark={true} />
                    <Color colorHex="#000" isDark={true} />
                    <Color colorHex="#1a1c25" isDark={true} />
                    <Color colorHex="#424552" isDark={true} />
                    <Color colorHex="#1a2458" isDark={true} />
                {/* </div> */}
            </HiddenScrollDiv>
        </div>
    )
}

export default ColorReferencePage;