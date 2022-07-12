import classes from "./Color.module.css";
import PropTypes from "prop-types";

function Color({ colorHex, isDark }) {
    let colorBoxClass;
    let textColor;
    if (isDark) {
        colorBoxClass = classes.colorBoxDark;
        textColor = "#fff"
    }
    else {
        colorBoxClass = classes.colorBox
        textColor = "#000"
    }

    function copyToClipboard() {
        navigator.clipboard.writeText(colorHex);
    }

    return (
        <div
            className={colorBoxClass}
            onClick={copyToClipboard}
            style={{ backgroundColor: colorHex }}
        >
            <h1
                className={classes.colorText}
                style={{ color: textColor }}
            >
                {colorHex}
            </h1>
        </div>
    )
}

Color.propTypes = {
    colorHex: PropTypes.string.isRequired,
    isDark: PropTypes.bool
}

export default Color