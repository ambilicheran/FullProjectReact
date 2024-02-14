import classesMain from "./Main.module.css";
import classesAbout from "./About.module.css";
import Divider from "./Divider";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div id="about" className={classesAbout.aboutContainer}>
        <h1 style={{ color: "white" }} className={classesMain.subTitle}>
          ABOUT
        </h1>
        <Divider color="white" />
        <div className={classesAbout.paraContainer}>
          <p className={classesAbout.aboutText}>
            Freelancer is a free bootstrap theme created by Start Bootstrap. The
            download includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className={classesAbout.aboutText}>
            You can create your own custom avatar for the masthead, change the
            icon in the dividers, and add your email address to the contact form
            to make it fully functional!
          </p>
        </div>
        <button className={classesAbout.downloadButton}>
          <FaDownload size={25} />
          Free Download!
        </button>
      </div>
    </>
  );
};

export default About;
