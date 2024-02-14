import { useState, useEffect } from "react";
import classes from "./NavigationBar.module.css";

const NavigationBar = (props) => {
  const [shrink, setShrink] = useState("");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    console.log(section.offsetTop);
    if (section) {
      const scrollToPosition = section.offsetTop - 90;
      window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])
  return (
    <div className={`${classes.navContainer} ${shrink ? classes.navContainerShrink : ""} ${shrink ? classes.navBrandNameShrink : ""}`}>
      <div className={classes.navbar}>
        <div className={classes.navBrandNameContainer}>
          <h1 className={classes.navBrandName}>
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="https://www.w3schools.com/"
            >
              START BOOTSTRAP
            </a>
          </h1>
        </div>
        <ul className={classes.navMenuList}>
          <li className={`${classes.navItem} ${classes.link}`} onClick={() => scrollToSection("portfolio")}>
            {/* <a href="#portfolio" className={classes.link}> */}
            PORTFOLIO
            {/* </a> */}
          </li>
          <li className={`${classes.navItem} ${classes.link}`} onClick={() => scrollToSection("about")}>
            {/* <a href="#about" className={classes.link}> */}
            ABOUT
            {/* </a> */}
          </li>
          <li className={`${classes.navItem} ${classes.link}`} onClick={() => scrollToSection("contact")}>
            {/* <a href="#contact" className={classes.link}> */}
            CONTACT
            {/* </a> */}
          </li>
        </ul>
      </div>
    </div >
  );
};

export default NavigationBar;
