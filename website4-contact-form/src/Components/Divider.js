import classes from "./Divider.module.css";
import { FaStar as StarIcon } from "react-icons/fa";

const Divider = ({ color }) => {
  return (
    <>
      <div className={classes.dividerContainer}>
        <div
          style={{
            backgroundColor: color,
          }}
          className={classes.line}
        ></div>
        <StarIcon
          style={{
            color: color,
          }}
          size={45}
        />
        <div
          style={{
            backgroundColor: color,
          }}
          className={classes.line}
        ></div>
      </div>
    </>
  );
};

export default Divider;
