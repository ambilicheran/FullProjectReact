import classes from "./Modal.module.css";

const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div onClick={onClose} className={classes.modalContainer}>
      <div id={id || "Modal"} className={classes.modal}>
        <div className={classes.top}>
          <span className={classes.description}>Pop-up</span>
          <span onClick={onClose} className={classes.closeModal}>
            &times;
          </span>
        </div>
        <div className={classes.content}>
          <div className={classes.header}>
            <h2>{header ? header : "Default header"}</h2>
          </div>
          <div className={classes.body}>
            {body ? body : "Default Modal Body"}
          </div>
          <div className={classes.footer}>
            <h2>{footer ? footer : "Default footer"}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
