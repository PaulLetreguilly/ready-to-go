const NoWay = ({ result }) => {
  //   let result = false;
  //   if (interr1 === true && interr2 === true && interr3 === true) {
  //     result = true;
  //   } else {
  //     result = false;
  //   }
  return (
    <div style={{ backgroundColor: result === true ? "#46AC4A" : "#D34848" }}>
      <span style={{ display: result === true ? "none" : "inherit" }}>
        No way !
      </span>
      <span style={{ display: result === false ? "none" : "inherit" }}>
        Go !
      </span>
    </div>
  );
};
export default NoWay;
