import { useState } from "react";
import classes from "./Tabs.module.css";

const Tabs = ({ content }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleSelectTab = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className={classes.container}>
      <div className={classes.tabContainer}>
        {content.map((item, index) => (
          <div
            className={classes.tab}
            onClick={() => handleSelectTab(index)}
            style={{ backgroundColor: selectedTab === index ? "purple" : null }}
            key={item.label}
          >
            <p>{item.label}</p>
          </div>
        ))}
      </div>
      <div className={classes.info}>{content[selectedTab].info}</div>
    </div>
  );
};

export default Tabs;
