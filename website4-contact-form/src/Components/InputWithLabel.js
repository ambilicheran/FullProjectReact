import classes from "./InputWithLabel.module.css";
import { FaExclamationCircle } from "react-icons/fa";

const InputWithLabel = ({ label, placeholder, onChange, onBlur, value, error }) => {
  return (
    <div>
      <label className={classes.label}>{label}</label>
      <br />
      <div className={classes.inputContainer}>
        <input
          className={classes.input}
          type="text"
          placeholder={placeholder}
          onBlur={onBlur}
          value={value}
          onChange={onChange}
        ></input>
        {error && <FaExclamationCircle size={30} style={{ color: "red" }} className={classes.webIcons} />}
      </div>
      <div style={{ backgroundColor: error ? "red" : " rgb(44, 62, 80)" }} className={classes.bottomLine}></div>
      <h4>{error}</h4>
    </div >
  );
};

export default InputWithLabel;
