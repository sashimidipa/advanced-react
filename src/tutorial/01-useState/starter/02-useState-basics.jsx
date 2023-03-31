import { useState } from "react";

const UseStateBasics = () => {

  const [count,setCount] = useState (0)

  const handleClick = () => {
    setCount(count + 1);
  }

  return (<>
    <h4>You clicked {count} times</h4>
    <button type="buttton" 
    className="btn" 
    onClick={handleClick}>Click Me</button>
    </>
  );
};

export default UseStateBasics;
