import IntroBox from "../components/introBox";
import classes from "./homePage.module.css"
import BlogPost from "../components/blogPost.js";
import { useEffect, useRef } from "react";

function HomePage() {
    const hidingContent = useRef(null);
    const scrollingContent = useRef(null);

    useEffect(() => {
        hidingContent.current.style.width = scrollingContent.current.clientWidth + "px";
    }, []);


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