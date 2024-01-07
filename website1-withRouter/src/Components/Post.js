import classes from "./Post.module.css"

function Post({author, book}) {
    return (
        <div className={
            classes.post
        }>
            <h1 className={
                classes.author
            }>
                {author}</h1>
            <h2 className={
                classes.book
            }>
                {book}</h2>
        </div>
    );
}

export default Post;
