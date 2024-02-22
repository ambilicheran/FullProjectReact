import { useEffect, useState } from "react";
import classes from "./RandomColorGenerator.module.css"

const RandomColorGenerator = () => {
    const [colorType, setColorType] = useState("HEX");
    const [color, setColor] = useState("#FFFFFF");

    const setColorTypeHandler = () => {
        setColorType((prevColorType) => (prevColorType === "HEX" ? "RGB" : "HEX"));
    }

    useEffect(() => {
        setColor((colorType === "HEX") ? "#FFFFFF" : "rgb(256,256,256)")
    }, [colorType]);

    // const setColorTypeHexHandler = () => {
    //     setColorType("HEX");
    // }

    // const setColorTypeRGBHandler = () => {
    //     setColorType("RGB");
    // }

    const randomize = (length) => {
        return Math.floor(Math.random() * length);
    }

    const generateRandomHexColorHandler = () => {
        const hexValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hexValues[randomize(hexValues.length)];
        }
        setColor(hexColor);
    }

    const generateRandomRGBColorHandler = () => {
        const r = randomize(256);
        const g = randomize(256);
        const b = randomize(256);
        const rgbColor = `rgb(${r},${g},${b})`;
        setColor(rgbColor);
    }

    return (
        <div style={{ backgroundColor: color }} className={classes.wrapper}>
            <div className={classes.buttonContainer}>
                {/* <button onClick={setColorTypeHexHandler} className={classes.button}>Generate HEX Color</button>
                <button onClick={setColorTypeRGBHandler} className={classes.button}>Generate RGB Color</button> */}
                <button onClick={setColorTypeHandler} className={classes.button}>Generate {colorType === "HEX" ? "RGB" : "HEX"} Color</button>
                <button onClick={(colorType === "HEX") ? generateRandomHexColorHandler : generateRandomRGBColorHandler} className={classes.button}>Generate random color</button>
            </div>
            <h1>{colorType}</h1>
            <h1>{color}</h1>
        </div>
    )
}
export default RandomColorGenerator;