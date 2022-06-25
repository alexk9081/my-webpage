import IntroBox from "../components/IntroBox";
import classes from "./HomePage.module.css";
import BlogPost from "../components/BlogPost.js";
import { useEffect, useRef, useState } from "react";

function HomePage() {
    const hidingContent = useRef(null);
    const scrollingContent = useRef(null);
    const [pageResize, setPageResize] = useState(null);

    window.addEventListener("resize", setPageResize);

    useEffect(() => {
        hidingContent.current.style.width = (scrollingContent.current.clientWidth - 1) + "px";
    }, [pageResize]);


    return <div className={classes.home}>
        <div className={classes.hiderDiv} ref={hidingContent} >
            <main className={classes.mainContent} ref={scrollingContent}>
                <IntroBox />
                <section>
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                </section>
            </main>
        </div>
    </div>
}

export default HomePage;