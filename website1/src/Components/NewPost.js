import classes from "./NewPost.module.css"
import {useState} from "react"

function NewPost(props) {

    const [enteredBook, setEnteredBook] = useState();
    const [enteredAuthor, setEnteredAuthor] = useState();
    function bookChangeHandler(event) {
        setEnteredBook(event.target.value);
    }
    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            author: enteredAuthor,
            book: enteredBook
        }
        console.log(postData);
        props.onAddPost(postData);
        props.onClose();
    }

    return (
        <form className={classes}
            onSubmit={submitHandler}>
            <p>
                <label className={
                        classes.author
                    }
                    htmlFor="author">Author</label><br/>
                <input id="author" type="text"
                    onChange={authorChangeHandler}></input><br/>
            </p>
            <p>
                <label className={
                        classes.book
                    }
                    htmlFor="book">Book</label><br/>
                <textarea id="book" required
                    rows={3}
                    onChange={bookChangeHandler}></textarea>
            </p>
            <p className={
                classes.actions
            }>
                <button type="button"
                    onClick={
                        props.onClose
                }>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    )
}
export default NewPost;
