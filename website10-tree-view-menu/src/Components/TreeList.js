import TreeItem from "./TreeItem";

const TreeList = ({ list = [] }) => {
  return list.map((listItem) => (
    <ul>
      <TreeItem key={listItem.label} item={listItem} />
    </ul>
  ));
};

export default TreeList;
