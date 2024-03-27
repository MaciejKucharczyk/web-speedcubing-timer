import './App.css';
import { useState, useEffect } from 'react';
//import { v4 as uuidv4 } from 'uuid';
//import { ResultsListProvider } from './ResultsList';
//import ListOfResults from './ListOfResults';

let currentTime = 0;

function Scramble() {
  // possible notations in a scramble

  const alphabet = [
    "R",
    "U",
    "L",
    "D",
    "F",
    "B",
  ]

  let algorithm = "";
  let prev = " ";
  let letter = "";
  let rand_id = Math.floor(Math.random() * 6);

  for(let i=0; i<20; i++){

    while(prev === rand_id){
      rand_id= Math.floor(Math.random() * 6);
    }

    letter = alphabet[rand_id];

    let prefix = Math.floor(Math.random() * 3);
    if(prefix === 1){
        letter += "'";
    }else if(prefix === 2){
      letter +="2  ";
    }
    algorithm += letter;
    algorithm += " ";
    prev = rand_id;
  }

  return(
    <div class="scramble">
      <h2 id="scramble-header">Scramble: </h2>
      <h2 id="scramble-alghoritm">{algorithm}</h2>
    </div>
  )
}

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [miliseconds, setMilliseconds] = useState(0);

  const formatTime = () => {
    const getMiliseconds = `0${(miliseconds % 1000) / 10}`.slice(-2);
    const seconds = Math.floor(miliseconds / 1000);
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const getMinutes = `0${Math.floor(seconds / 60)}`.slice(-2);
    currentTime = `${getMinutes}:${getSeconds}.${getMiliseconds}`;

    return `${getMinutes}:${getSeconds}.${getMiliseconds}`;
  }


  const handleSpacePress = (event) => {
    if (event.code === 'Space'){
      setIsRunning(!isRunning);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleSpacePress);

    return () => {
      window.removeEventListener('keydown', handleSpacePress);
    };
  });

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setMilliseconds((prevMiliseconds) => prevMiliseconds + 10);
      }, 10);

    } else if(!isRunning) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div class="time">
      <h1>{formatTime()}</h1>
      <button onClick={() => setIsRunning(!isRunning)}> {isRunning ? 'Pause' : 'Start'} </button>
      <button onClick={() => setMilliseconds(0)}>Reset</button>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <h1>Cube timer</h1>
      <Scramble />
      <div id="scramle"></div>
      <header className="App-header">
        <p>
          <Timer />
        </p>
      </header>
    </div>
  );
}

export default App;
