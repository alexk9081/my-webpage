import IntroBox from "../components/introBox";
import BlogPost from "../components/blogPost.js";

function HomePage() {
    return <div>
        <main>
            <IntroBox />
            <section>
                <BlogPost />
            </section>
        </main>
    </div>
}

export default HomePage;