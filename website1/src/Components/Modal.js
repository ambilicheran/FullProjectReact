import classes from "./Modal.module.css"

function Modal(props) {
    return (
        <div>
            <div className={
                    classes.backdrop
                }
                onClick={
                    props.onClose
            }></div>
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
