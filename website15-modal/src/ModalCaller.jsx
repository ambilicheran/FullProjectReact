import { useState } from "react";
import Modal from "./Modal";
import classes from "./Modal.module.css";

const ModalCaller = () => {
  const [openModal, setOpenModal] = useState(false);

  const clickOpenModalHandler = () => {
    setOpenModal(true);
  };

  const closeHandler = () => {
    setOpenModal(false);
  };

  return (
    <div className={classes.buttonContainer}>
      <button onClick={clickOpenModalHandler}>Open Modal</button>
      {openModal && <Modal body={<p>test</p>} onClose={closeHandler} />}
    </div>
  );
};

export default ModalCaller;
