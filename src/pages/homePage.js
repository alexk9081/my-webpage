import IntroBox from "../components/IntroBox";
import classes from "./HomePage.module.css";
import BlogPost from "../components/BlogPost";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { firestore } from "../firebaseConfig";
import HiddenScrollDiv from "../components/HiddenScrollDiv";

function HomePage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const blogPostData = collection(firestore, "blogPosts");
            const querySnapshot = await getDocs(query(blogPostData, orderBy("date", "desc")));
            setPosts(querySnapshot.docs.map((doc) => {
                return (
                    <>
                        <h1 className={classes.postDivider}>•••</h1>
                        <BlogPost title={doc.data().title}
                            description={doc.data().body}
                            time={doc.data().date.seconds}
                            userName={doc.data().userDisplayName}
                            userImg={doc.data().userImageUrl}
                            key={uuidv4()} />
                    </>
                )
            })
            );
        }

        getPosts();
    }, [])

    const blogPosts = () => {
        if (posts.length > 0) {
            return posts;
        }
        else {
            return <BlogPost
                title="Not Blog Posts Found!"
                description="Blog posts could not be located. Check if firebase is down. Check if your internet is connected. Reload the page."
                userName="Developer"
                userImg=""
            />
        }
    }

    return (
        <div className={classes.home}>
            <HiddenScrollDiv contentClass={classes.mainContent} >
                <IntroBox />
                <section>
                    {blogPosts()}
                </section>
            </HiddenScrollDiv>
        </div>
    )
}

export default HomePage;