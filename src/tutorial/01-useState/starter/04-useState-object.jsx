import { useState } from 'react';


const UseStateObject = () => {
  const [person,setPerson] = useState({
    name: 'Peter',
    age: 24,
    hobby: "Read Books"},
  );
  //const [name, setName] = useState("Peter");
  //const [age, setAge] = useState(24);
  //const [hobby, setHobby] = useState("Read Books");

  const showNext = () => {
    setPerson({
      name: 'John',
      age: 28,
      hobby: 'Stream at the computer',
    });
    //setName('John');
    //setAge(28);
    //setHobby('Stream at the computer');
  };
  return (
    <>
      <h3>{person.name}</h3> 
      <h3>{person.age}</h3>  
      <h4>Enjoys : {person.hobby}</h4>   
      <button type='button' className='btn' onClick={showNext} >Show John</button>
    </>
  );
};

export default UseStateObject;
