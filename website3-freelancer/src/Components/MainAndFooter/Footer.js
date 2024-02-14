import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBasketballBall,
} from "react-icons/fa";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={classes.footerContainer}>
        <div className={classes.locationContainer}>
          <h1>LOCATION</h1>
          <p className={classes.footerText}>
            2215 John Daniel Drive
            <br />
            Clark, MO 65243
          </p>
        </div>
        <div className={classes.aroundthewebContainer}>
          <h1>AROUND THE WEB</h1>
          <div className={classes.webIconsContainer}>
            <FaFacebookF size={30} className={classes.webIcons} />
            <FaTwitter size={30} className={classes.webIcons} />
            <FaLinkedinIn size={30} className={classes.webIcons} />
            <FaBasketballBall size={30} className={classes.webIcons} />
          </div>
        </div>
        <div className={classes.aboutfreelancerContainer}>
          <h1>ABOUT FREELANCER</h1>
          <p className={classes.footerText}>
            Freelance is a free to use, MIT licensed Bootstrap theme created by{" "}
            <a
              className={classes.link}
              href="https://www.w3schools.com/tags/tag_a.asp"
            >
              Start Bootstrap
            </a>
          </p>
        </div>
      </div >
    </>
  );
};

export default Footer;
