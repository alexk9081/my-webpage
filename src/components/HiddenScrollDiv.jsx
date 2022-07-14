import { useRef, useEffect, useState } from "react";

function HiddenScrollDiv({ hiderClass, contentClass, children }) {
    const hidingContent = useRef(null);
    const scrollingContent = useRef(null);
    const [pageResize, setPageResize] = useState(null);

    window.addEventListener("resize", setPageResize);

    useEffect(() => {
        hidingContent.current.style.width = (scrollingContent.current.clientWidth - 1) + "px";
    }, [pageResize])

    const defaultHiderStyle = {
        overflow: "hidden"
    }
    
    const defaultContentStyle = {
        height: "calc(100vh - 3.6rem - 40px)",
        "overflow-y": "scroll"
    
    }
    
    return (
        <div className={hiderClass} style={defaultHiderStyle} ref={hidingContent} >
            <div className={contentClass} style={defaultContentStyle} ref={scrollingContent}>
                {children}
            </div>
        </div>
    )
}

export default HiddenScrollDiv;