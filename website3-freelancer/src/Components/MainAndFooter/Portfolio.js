import classesPortfolio from "./Portfolio.module.css";
import classesMain from "./Main.module.css";
import cabin from "../../Resources/cabin.png";
import cake from "../../Resources/cake.png";
import circus from "../../Resources/circus.png";
import game from "../../Resources/game.png";
import safe from "../../Resources/safe.png";
import submarine from "../../Resources/submarine.png";
import Divider from "./Divider";
import PortfolioItem from "./PortfolioItem";
import { useState } from "react";

const Portfolio = (props) => {
  const portfolioImageNames = ["cabin", "cake", "circus", "game", "safe", "submarine"];
  const portfolioImagesDictionary = { "cabin": cabin, "cake": cake, "circus": circus, "game": game, "safe": safe, "submarine": submarine };
  const [selectedPortfolio, setSelectedPortfolio] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const onClickPortfolioHandler = (image) => {
    setSelectedPortfolio(image);
    setIsOpen(true);
  }
  const closeModalHandler = () => {
    setIsOpen(false);
  }
  console.log(selectedPortfolio);
  return (
    <>
      <div id="portfolio" className={classesPortfolio.portfolioContainer}>
        <h1
          style={{ color: "rgb(44, 62, 80)" }}
          className={classesMain.subTitle}
        >
          PORTFOLIO
        </h1>
        <Divider color="rgb(44, 62, 80)" />
        <div className={classesPortfolio.portfolioGrid}>
          {portfolioImageNames.map((image) => (
            <div key={image} className={classesPortfolio.portfolioItem}
              onClick={() => onClickPortfolioHandler(image)}>
              <img
                className={classesPortfolio.portfolioImage}
                src={portfolioImagesDictionary[image]}
                alt={image}
              />
              <div className={classesPortfolio.hoverOverlay} >
                <svg className="svg-inline--fa fa-plus fa-3x" width="90" height="90" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                  <path fill="white" d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isOpen && <PortfolioItem portfolio={selectedPortfolio} closeModal={closeModalHandler} isOpen={isOpen} />}
    </>
  );
};

export default Portfolio;


