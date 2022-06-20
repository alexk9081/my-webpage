import { useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import classes from "./dropDownMenu.module.css";

function DropdownMenu(props) {
    const [open, setOpen] = useState(false);
    
    return <>
        <FaAngleDoubleDown className={classes.DropdownMenu} onClick={() => {setOpen(!open)}} />
        
        <div className={classes.itemHolder}>
            {open && props.children}
        </div>
    </>
};

export default DropdownMenu;