import {MdPostAdd, MdMessage} from "react-icons/md";
import classes from "./MainHeader.module.css";
import {Link} from "react-router-dom";

function MainHeader(props) {
    return (
        <header>
            <h1 className={
                classes.logo
            }><MdMessage/>React Poster</h1>
            <Link to="/create-post"
                onClick={
                    props.showModal
            }><MdPostAdd size={20}/>New Post</Link>
        </header>
    )
}
export default MainHeader;
