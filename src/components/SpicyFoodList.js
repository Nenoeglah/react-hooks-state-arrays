
import React, { useState } from "react";
// import { spicyFoods, getNewRandomSpicyFood } from "../data";


const SpicyFoodList = () => {
  const [spicyFoods, setSpicyFoods] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addSpicyFood = () => {
    const newFood = inputValue.trim();
    if (newFood !== '') {
      setSpicyFoods((prevFoods) => [...prevFoods, newFood]);
      setInputValue(''); 
    }
  };

  const deleteSpicyFood = (index) => {
    const updatedFoods = [...spicyFoods];
    updatedFoods.splice(index, 1);
    setSpicyFoods(updatedFoods);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a new spicy food..."
      />
      <button onClick={addSpicyFood}>Add New Food</button>
      <ul>
        {spicyFoods.map((food, index) => (
          <li key={index}>
            {food}
            <button onClick={() => deleteSpicyFood(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpicyFoodList;