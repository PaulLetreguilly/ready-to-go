import OnOff from "./OnOff";
import NoWay from "./NoWay";
import Reset from "./Reset";
import { useState } from "react";

const Content = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  let result = false;
  if (switch1 === true && switch2 === true && switch3 === true) {
    result = true;
  } else {
    result = false;
  }

  return (
    <main className="container">
      <section>
        <OnOff interr={switch1} setSwitch={setSwitch1} />
        <OnOff interr={switch2} setSwitch={setSwitch2} />
        <OnOff interr={switch3} setSwitch={setSwitch3} />
        <Reset
          setSwitch1={setSwitch1}
          setSwitch2={setSwitch2}
          setSwitch3={setSwitch3}
        />
      </section>
      <NoWay result={result} />
    </main>
  );
};
export default Content;

// const [switch1, setSwitch1] = useState(false);
// const [switch2, setSwitch2] = useState(false);
// const [switch3, setSwitch3] = useState(false);
