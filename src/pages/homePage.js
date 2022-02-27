import IntroBox from "../components/introBox";
import classes from "./homePage.module.css"
// import BlogPost from "../components/blogPost.js";

function HomePage() {
    return <div className={classes.home}>
        <main>
            <IntroBox />
            <section>
                {/* <BlogPost /> */}
            </section>
        </main>
    </div>
}

export default HomePage;