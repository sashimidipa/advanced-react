import { useState } from "react";
import { data } from '../../../data';

const UseStateArray = () => {
  const [people,setPeople] = useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((person)  => person.id !== id);
    setPeople(newPeople);
  };
  const clearAllItems = () => {
    setPeople([])
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button type="button" 
            onClick={() => removeItem (id)}>
              remove</button>
          </div>
        );
      })}
      <button type="button" 
      className="btn" 
      style={{marginTop: '2rem'}} onClick={clearAllItems}>
        Clear All
        </button>
    </>
  );
};

export default UseStateArray;
