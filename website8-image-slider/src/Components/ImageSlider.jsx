import { useEffect, useState } from "react";
import classes from "./ImageSlider.module.css";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, page = 1, limit = 5 }) => {
  const [dataSet, setDataSet] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLeftArrowHovered, setIsLeftArrowHovered] = useState(false);
  const [isRightArrowHovered, setIsRightArrowHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [circleHoveredIndex, setCircleHoveredIndex] = useState("");

  useEffect(() => {
    if (url !== "") {
      fetchImages();
    }
  }, [url]);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setDataSet(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMessage(e.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading!</div>;
  }
  if (errorMessage !== "") {
    return <div>{errorMessage}</div>;
  }

  const handlePrevious = () => {
    currentImage === 0
      ? setCurrentImage(dataSet.length - 1)
      : setCurrentImage(currentImage - 1);
  };

  const handleNext = () => {
    currentImage === dataSet.length - 1
      ? setCurrentImage(0)
      : setCurrentImage(currentImage + 1);
  };

  const handleSelection = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className={classes.imageContainer}>
      <BsArrowLeftCircleFill
        className={`${classes.arrow} ${classes.leftArrow}`}
        size={50}
        onMouseEnter={() => setIsLeftArrowHovered(true)}
        onMouseLeave={() => setIsLeftArrowHovered(false)}
        style={{ color: isLeftArrowHovered ? "#d3d3d3" : null }}
        onClick={handlePrevious}
      />
      {dataSet
        ? dataSet.map((image, index) => (
            <img
              className={
                index === currentImage
                  ? classes.image
                  : `${classes.image} ${classes.hideImage}`
              }
              key={image.id}
              src={image.download_url}
              alt={image.url}
            ></img>
          ))
        : null}
      <BsArrowRightCircleFill
        className={`${classes.arrow} ${classes.rightArrow}`}
        size={50}
        onMouseEnter={() => setIsRightArrowHovered(true)}
        onMouseLeave={() => setIsRightArrowHovered(false)}
        style={{ color: isRightArrowHovered ? "#d3d3d3" : null }}
        onClick={handleNext}
      />
      <span className={classes.circleContainer}>
        {dataSet
          ? dataSet.map((_, index) => (
              <button
                key={index}
                className={classes.circle}
                onClick={() => handleSelection(index)}
                style={{
                  backgroundColor: index === currentImage ? "white" : "black",
                  boxShadow:
                    index === circleHoveredIndex ? "0 0 5px black" : null,
                }}
                onMouseEnter={() => setCircleHoveredIndex(index)}
                onMouseLeave={() => setCircleHoveredIndex("")}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
