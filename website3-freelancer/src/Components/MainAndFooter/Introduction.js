import classes from "./Introduction.module.css";
import avataar from "../../Resources/avataaars.svg";
import Divider from "./Divider";

const Introduction = () => {
  return (
    <div className={classes.introContainer}>
      <img className={classes.imgAvataar} src={avataar} alt="avataar" />
      <h1 className={classes.brandName}>START BOOTSTRAP</h1>
      <Divider color="white" />
      <h1 className={classes.introDescription}>
        Graphic Artist - Web Designer - Illustrator
      </h1>
    </div>
  );
};

export default Introduction;
