import classes from "./Post.module.css"

function Post({author, book}) {
    const rand = Math.random();
    const chooseName = rand > 0.5 ? "Ambili" : "Cheran";
    console.log("Random Value", rand);
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
