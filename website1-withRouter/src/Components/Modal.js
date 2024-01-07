import classes from "./Modal.module.css"
import {useNavigate} from "react-router-dom"

function Modal(props) {
    const navigate = useNavigate();
    function closeModalHandler() {
        navigate("..");
    }
    return (
        <div>
            <div className={
                    classes.backdrop
                }
                onClick={closeModalHandler}></div>
            <dialog open
                className={
                    classes.modal
            }>
                {
                props.children
            }</dialog>
        </div>
    )
}
export default Modal;
