import { useState, useEffect } from "react";
import classes from "./LoadMoreData.module.css";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const result = await response.json();
      result && setProducts((prevData) => [...prevData, ...result.products]);
      setLoading(false);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products.length === 100) {
      setDisabled(true);
    }
  });

  return (
    <div>
      {loading && <p>Loading..</p>}
      <div className={classes.productsContainer}>
        {products &&
          products.map((item) => (
            <div key={item.id}>
              <img
                className={classes.image}
                src={item.thumbnail}
                alt={item.title}
              ></img>
              <p>{item.title}</p>
            </div>
          ))}
      </div>
      <div className={classes.buttonContainer}>
        <button
          disabled={disabled}
          style={{
            backgroundColor: disabled ? "lightgray" : "rgb(86, 87, 87);",
            cursor: disabled ? "default" : "pointer",
          }}
          onClick={() => setCount(count + 1)}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default LoadMoreData;
