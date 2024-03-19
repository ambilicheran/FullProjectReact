import TreeList from "./TreeList";
import data from "./data.js";
import classes from "./TreeView.module.css";

const TreeView = () => {
  return (
    <div className={classes.container}>
      <TreeList list={data} />
    </div>
  );
};

export default TreeView;
