import { useState, useEffect } from "react";
import classes from "./ScrollIndicator.module.css";

const ScrollIndicator = ({ url }) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fetchedData, setfetchedData] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (data.products) {
        setfetchedData(data.products);
      }
      setLoading(false);
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  const handleScrollPercentage = () => {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((howMuchScrolled / height) * 100);
    console.log("%", scrollPercentage);
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  return (
    <div className={classes.mainContainer}>
      <div className={classes.topContainer}>
        <h1>Scroll Indicator</h1>
        <div className={classes.scrollProgressTrackingContainer}>
          <div
            className={classes.currentProgressBar}
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className={classes.dataContainer}>
        {fetchedData.map((dataItem) => (
          <p>{dataItem.title}</p>
        ))}
        <p>{loading && "Loading data..please wait!"}</p>
        <p>
          {errorMessage && "Error!"}
          {errorMessage}
        </p>
      </div>
    </div>
  );
};

export default ScrollIndicator;
