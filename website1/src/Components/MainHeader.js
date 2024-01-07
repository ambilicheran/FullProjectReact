import {MdPostAdd, MdMessage} from "react-icons/md";
import classes from "./MainHeader.module.css";

function MainHeader(props) {
    return (
        <header>
            <h1 className={
                classes.logo
            }><MdMessage/>React Poster</h1>
            <button onClick={
                props.showModal
            }><MdPostAdd size={20}/>New Post</button>
        </header>
    )
}
export default MainHeader;
