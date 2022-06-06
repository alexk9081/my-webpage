import IntroBox from "../components/introBox";
import classes from "./homePage.module.css"
import BlogPost from "../components/blogPost.js";

function HomePage() {
    return <div className={classes.home}>
        <main className={classes.mainContent}>
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
}

export default HomePage;