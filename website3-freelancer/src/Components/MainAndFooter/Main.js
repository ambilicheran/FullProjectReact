import Introduction from "./Introduction";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Copyright from "./Copyright";
import classes from "./Main.module.css"

const Main = () => {
  return (
    <div className={classes.mainContainer}>
      <Introduction />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Main;
