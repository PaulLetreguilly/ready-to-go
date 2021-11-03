// import { useState } from "react"; #5C48D3
// import Reset from "./Reset";

const OnOff = ({ interr, setSwitch }) => {
  const handleClick = () => {
    if (interr === false) {
      setSwitch(true);
    } else {
      setSwitch(false);
    }
  };

  return (
    <div className="switch">
      <button
        className="on"
        onClick={handleClick}
        style={{
          backgroundColor: interr === false ? "#fff" : "#5C48D3",
          color: interr === true ? "black" : "#5C48D3",
        }}
      >
        ON
      </button>
      <button
        className="off"
        onClick={handleClick}
        style={{
          backgroundColor: interr === true ? "#fff" : "#5C48D3",
          color: interr === false ? "black" : "#5C48D3",
        }}
      >
        OFF
      </button>
    </div>
  );
};
export default OnOff;
