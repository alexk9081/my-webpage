import Color from "../components/Color";
import HiddenScrollDiv from "../components/HiddenScrollDiv";
import classes from "./ColorReferencePage.module.css";

function ColorReferencePage({ notification }) {
    return (
        <div className={classes.colorRefPage}>
            <HiddenScrollDiv contentClass={classes.sizeWrapper}>
                <Color notification={notification} colorHex="#fff" />
                <Color notification={notification} colorHex="#222" isDark={true} />
                <Color notification={notification} colorHex="#111" isDark={true} />
                <Color notification={notification} colorHex="#888" isDark={true} />
                <Color notification={notification} colorHex="#000" isDark={true} />
                <Color notification={notification} colorHex="#1a1c25" isDark={true} />
                <Color notification={notification} colorHex="#424552" isDark={true} />
                <Color notification={notification} colorHex="#1a2458" isDark={true} />
            </HiddenScrollDiv>
        </div>
    )
}

export default ColorReferencePage;