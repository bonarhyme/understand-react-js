import React, { useState } from "react";
import "../hey.css";

const Counter = () => {
  const [value, setValue] = useState(0);

  const [name, setName] = useState("");

  return (
    <>
      <h1 className="center">{name}</h1>
      <button
        className="center"
        onClick={() => setName("Bonaventure Bonarhyme")}
      >
        Set Name
      </button>
      <div className="counter">
        <button onClick={() => setValue(value - 1)}>Decrement -</button>
        <p>{value}</p>
        <button onClick={() => setValue(value + 1)}>Increment +</button>
      </div>
    </>
  );
};

export default Counter;
