import { useRef, useEffect, useState } from "react";

function HiddenScrollDiv({ contentClass, children }) {
    const hidingContent = useRef(null);
    const scrollingContent = useRef(null);
    const [pageResize, setPageResize] = useState(null);

    window.addEventListener("resize", setPageResize);

    useEffect(() => {
        hidingContent.current.style.width = (scrollingContent.current.clientWidth - 1) + "px";
    }, [pageResize])

    const defaultHiderStyle = {
        margin: "0 auto",
        overflow: "hidden"
    }
    
    const defaultContentStyle = {
        height: "calc(100vh - 1.6rem - 40px)",
        "overflowY": "scroll"
    
    }
    
    return (
        <div style={defaultHiderStyle} ref={hidingContent} >
            <div className={contentClass} style={defaultContentStyle} ref={scrollingContent}>
                {children}
            </div>
        </div>
    )
}

export default HiddenScrollDiv;