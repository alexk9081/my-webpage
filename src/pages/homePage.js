import IntroBox from "../components/IntroBox";
import classes from "./HomePage.module.css";
import BlogPost from "../components/BlogPost";
import { useEffect, useRef, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { firestore } from "../firebaseConfig";

function HomePage() {
    const hidingContent = useRef(null);
    const scrollingContent = useRef(null);
    const [pageResize, setPageResize] = useState(null);
    const [posts, setPosts] = useState(null);

    window.addEventListener("resize", setPageResize);

    useEffect(() => {
        hidingContent.current.style.width = (scrollingContent.current.clientWidth - 1) + "px";
    }, [pageResize]);

    function convSecToTime(secs) {
        const date = new Date(secs * 1000);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        let hours = date.getHours();
        let minutes = date.getMinutes();

        //Convert minutes and hours to am/pm
        let ampm = "am";
        if (hours > 12) {
            ampm = "pm";
            hours -= 12;
        }
        if (hours === 0) {
            hours = 12;
        }

        //Convert minutes to double digits
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        //Convert month number into name
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const monthName = monthNames[month - 1];

        return `${monthName} ${day}, ${year} @ ${hours}:${minutes} ${ampm}`;
    }

    useEffect(() => {
        const getPosts = async () => {
            const blogPostData = collection(firestore, "blogPosts");
            const querySnapshot = await getDocs(query(blogPostData, orderBy("date", "desc")));
            setPosts(querySnapshot.docs.map((doc) => {
                return (
                    <BlogPost title={doc.data().title}  
                        description={doc.data().body} 
                        time={convSecToTime(doc.data().date.seconds)} 
                        userName={doc.data().userDisplayName} 
                        userImg={doc.data().userImageUrl}
                        key={doc.data().date.seconds} />
                )})
            );
        } 
        
        getPosts();
    }, []);

    return <div className={classes.home}>
        <div className={classes.hiderDiv} ref={hidingContent} >
            <main className={classes.mainContent} ref={scrollingContent}>
                <IntroBox />
                <section>
                    {posts}
                </section>
            </main>
        </div>
    </div>
}

export default HomePage;