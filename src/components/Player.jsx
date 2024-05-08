import { useState, useRef } from "react";

export default function Player() {
    const PlayerName = useRef();

    const [enteredPlayerName, setEnteredPlayerName] = useState(null);
    
    function handleClick(){
        setEnteredPlayerName(PlayerName.current.value);
        PlayerName.current.value = '';
    }
    
    return (
      <section id="player">
        <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
        <p>
          <input type="text" ref={PlayerName}/>
          <button onClick={handleClick}>Set Name</button>
        </p>
      </section>
    );
  }
  