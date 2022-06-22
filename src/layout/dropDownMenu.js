import { useState } from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import classes from "./dropDownMenu.module.css";

function DropdownMenu(props) {
    const [open, setOpen] = useState(false);
    
    return <>
        {!open && <FaAngleDoubleDown className={classes.menuButton} onClick={() => {setOpen(!open)}} /> }

        {open &&
        <>
            <FaAngleDoubleUp className={classes.menuButton} onClick={() => {setOpen(!open)}} />
            <div className={classes.itemHolder}>
                {props.children}
            </div>
        </>
        }
    </>
};

export default DropdownMenu;