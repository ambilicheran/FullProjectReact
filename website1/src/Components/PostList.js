import Post from "./Post"
import classes from "./PostList.module.css"
import NewPost from "./NewPost"
import {useEffect, useState} from "react"
import Modal from "./Modal"

function PostList(props) { /*    const [posts, setPosts] = useState([]);
    function addPostHandler(postData) {
        setPosts((existingPosts) => [
            postData,
            ...existingPosts
        ]);
    }   */
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsLoading(true);
            const response = await fetch("http://localhost:8080/posts")
            const resData = await response.json();
            setPosts(resData.posts);
            setIsLoading(false);
        }
        fetchPosts();
    }, [])

    function addPostHandler(postData) {
        fetch("http://localhost:8080/posts", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json"
            }
        });
        setPosts((existingPosts) => [
            postData,
            ...existingPosts
        ]);
    }

    return (
        <>{
            props.modalIsVisible && (
                <Modal onClose={
                    props.closeModal
                }>
                    <NewPost onClose={
                            props.closeModal
                        }
                        onAddPost={addPostHandler}/>
                </Modal>
            )
        }

            {
            !isLoading && posts.length > 0 && (
                <ul className={
                    classes.posts
                }>
                    {
                    posts.map((post) => <Post key={
                            post.body
                        }
                        author={
                            post.author
                        }
                        book={
                            post.book
                        }/>)
                } </ul>
            )
        }
            {
            !isLoading && posts.length === 0 && (
                <div style={
                    {
                        color: "blue",
                        textAlign: "center"
                    }
                }>
                    <h2>No posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )
        }
            {
            isLoading && (
                <div style={
                    {
                        color: "blue",
                        textAlign: "center"
                    }
                }>
                    <p>Loading...</p>
                </div>
            )
        }</>
    )
}
export default PostList;
