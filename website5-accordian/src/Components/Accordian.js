import data from "./data";
import classes from "./Accordian.module.css"
import { useState } from "react";

const Accordian = () => {
    const [multi, setMulti] = useState(false);
    const [selected, setSelected] = useState("");
    const [multiSelected, setMultiSelected] = useState([]);
    const singleSelectionHandler = (dataId) => {
        setMultiSelected("");
        selected === dataId ? setSelected("") : setSelected(dataId);
    }
    const multiSelectionHandler = (dataId) => {
        setSelected("");
        const index = multiSelected.indexOf(dataId);
        const newArray = index === -1 ? [...multiSelected, dataId] : multiSelected.filter((item) => item !== dataId);
        setMultiSelected(newArray);
    }
    const multiHandler = () => {
        setMulti(!multi);
        console.log(multi);
    }
    return (
        <div className={classes.container}>
            <button onClick={multiHandler} className={classes.multiButton}>Multi Selection</button>
            {data && data.map((dataItem) => {
                return (
                    <div key={dataItem.id} className={classes.wrapper}>
                        <div onClick={multi ? () => { multiSelectionHandler(dataItem.id) } : () => { singleSelectionHandler(dataItem.id) }} className={classes.title}>
                            <h1>{dataItem.question}</h1>
                            <span className={classes.expand}>+</span>
                        </div>
                        {/* {(selected && (selected === dataItem.id)) && <p className={classes.answer}>{dataItem.answer}</p>} */}
                        {multi ? multiSelected.includes(dataItem.id) && <p className={classes.answer}>{dataItem.answer}</p> : (selected === dataItem.id) && <p className={classes.answer}>{dataItem.answer}</p>}
                    </div>)
            })}
        </div >
    )
}

export default Accordian;