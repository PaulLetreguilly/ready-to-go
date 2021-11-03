const Reset = ({ setSwitch1, setSwitch2, setSwitch3 }) => {
  const handleClick = () => {
    setSwitch1(false);
    setSwitch2(false);
    setSwitch3(false);
  };
  return (
    <button className="reset" onClick={handleClick}>
      RESET
    </button>
  );
};

export default Reset;
