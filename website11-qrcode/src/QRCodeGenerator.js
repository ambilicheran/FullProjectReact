import classes from "./QRCodeGenerator.module.css";
import { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [input, setInput] = useState("");
  const [finalInputForQRCode, setFinalInputForQRCode] = useState("");
  const onClickGenerateHandler = () => {
    setFinalInputForQRCode(input);
  };
  return (
    <div className={classes.container}>
      <h1>QR-Code Generator</h1>
      <input
        className={classes.input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
        placeholder="Enter your text"
      ></input>
      <button
        style={{
          backgroundColor: input.trim() === "" ? "rgb(158, 164, 165)" : null,
        }}
        disabled={input.trim() === "" ? true : false}
        className={classes.button}
        onClick={onClickGenerateHandler}
      >
        Submit
      </button>
      <QRCode value={finalInputForQRCode} size={400} />
    </div>
  );
};

export default QRCodeGenerator;
