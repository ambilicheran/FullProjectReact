import classes from "./NewPost.module.css"
import {useState} from "react"
import Modal from "../Components/Modal"
import {Link, Form, redirect} from "react-router-dom"

function NewPost() {

    return (
        <Modal>
            <Form method="post"
                className={
                    classes.form
            }>
                <p>
                    <label className={
                            classes.author
                        }
                        htmlFor="author">Author</label><br/>
                    <input id="author" name="author" type="text"></input><br/>
                </p>
                <p>
                    <label className={
                            classes.book
                        }
                        htmlFor="book">Book</label><br/>
                    <textarea id="book" name="book" required
                        rows={3}></textarea>
                </p>
                <p className={
                    classes.actions
                }>
                    <Link type="button" to="..">Cancel</Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    )
}
export default NewPost;

export async function action({request}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    await fetch("http://localhost:8080/posts", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return redirect("/");
}
