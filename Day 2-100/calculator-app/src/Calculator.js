import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input)); // ⚠️ Be cautious with eval (for learning purposes only)
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {[7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", 0, ".", "=", "+"].map((item) => (
          <button key={item} onClick={() => (item === "=" ? calculateResult() : handleClick(item))}>
            {item}
          </button>
        ))}
        <button className="clear" onClick={clearInput}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
