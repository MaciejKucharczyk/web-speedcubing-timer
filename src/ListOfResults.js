import React from 'react';
import { useResultsList } from './ResultsList'

function ListOfResults(newResult) {
    const {times, AddTime} = useResultsList();
    const newResult = newResult;
    const handleAddResult = (newResult) => {
      // const newResult = `Result ${times.length + 1}`;
      AddTime(newResult);
    };
  
    return (
      <div>
        <ul>
          {times.map((time, index) => (
            <li key={index}>{time}</li>
          ))}
        </ul>
        <button onClick={handleAddResult()}>Add new element </button>
      </div>
    )
  }
  

export default ListOfResults;