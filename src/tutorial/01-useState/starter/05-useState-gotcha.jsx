import { useState } from "react";

const UseStateGotcha = () => {
  const [value,setValue] = useState (0);

  const handleClick = () => {
    setTimeout(() => {
      console.log('clicked the button');
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };
  return (
    <>
      <h1>{value}</h1>
      <button type="buttton" 
      className="btn" 
      onClick={handleClick}>Increase</button>
    </>
  );
};
export default UseStateGotcha;
