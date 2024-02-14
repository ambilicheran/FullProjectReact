import classes from "./PortfolioItem.module.css";
import Divider from "./Divider";
import cabin from "../../Resources/cabin.png";
import cake from "../../Resources/cake.png";
import circus from "../../Resources/circus.png";
import game from "../../Resources/game.png";
import safe from "../../Resources/safe.png";
import submarine from "../../Resources/submarine.png";
import Modal from "react-modal";

const PortfolioItem = ({ portfolio, closeModal, isOpen }) => {
    const portfolioImagesDictionary = { "cabin": cabin, "cake": cake, "circus": circus, "game": game, "safe": safe, "submarine": submarine };
    const portfolioNamesDescDictionary = { "cabin": "LOG CABIN", "cake": "TASTY CAKE", "circus": "CIRCUS TENT", "game": "CONTROLLER", "safe": "LOCKED SAFE", "submarine": "SUBMARINE" }

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                className={classes.modal}
                overlayClassName={classes.overlay}
                shouldCloseOnOverlayClick={true}
                ariaHideApp={false}
            >
                <h1 className={classes.subTitle}>{portfolioNamesDescDictionary[portfolio]}</h1>
                <Divider color="rgb(44, 62, 80)" />
                <img
                    src={portfolioImagesDictionary[portfolio]}
                    alt={portfolio}
                />
                <p className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <button className={classes.closeButton} onClick={closeModal}>X Close Window</button>
            </Modal>
        </div>
    )
}
export default PortfolioItem;