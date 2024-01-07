import Post from "./Post"
import classes from "./PostList.module.css"
import {useLoaderData} from "react-router-dom"

function PostList() {
    const posts = useLoaderData();
    return (
        <> {
            posts.length > 0 && (
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
            posts.length === 0 && (
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
        } </>
    )
}
export default PostList;
