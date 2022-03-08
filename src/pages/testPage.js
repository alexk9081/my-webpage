import TestDiv from "../components/testDIv";
import PostForm from '../components/arrangements/postForm.js';
import ScrollableDiv from "../components/scrollableDiv";

function TestPage() {
    return <div>
        Test Page
        <TestDiv></TestDiv>

        <PostForm />

        <ScrollableDiv></ScrollableDiv>
    </div>
}

export default TestPage;