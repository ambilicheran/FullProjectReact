import classes from "./TreeItem.module.css";
import { useState } from "react";
import TreeList from "./TreeList";
import { FaPlus, FaMinus } from "react-icons/fa";

const TreeItem = ({ item }) => {
  const [clicked, setClicked] = useState(false);
  const [symbol, setSymbol] = useState("+");

  const onExpandHandler = () => {
    console.log("clicked!");
    setClicked(!clicked);
    symbol === "+" ? setSymbol("-") : setSymbol("+");
  };

  return (
    <div>
      <div className={classes.mainBranch}>
        <h3>{item.label}</h3>
        <div onClick={onExpandHandler} className={classes.symbol}>
          {item.children
            ? (symbol === "+" && <FaPlus />) || (symbol === "-" && <FaMinus />)
            : null}
        </div>
      </div>
      <div>{clicked && item.children && <TreeList list={item.children} />}</div>
    </div>
  );
};

export default TreeItem;
