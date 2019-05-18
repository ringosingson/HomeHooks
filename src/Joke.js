import React, { useState, useEffect } from "react";

function Joke() {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/jokes/random")
      .then(response => response.json())
      .then(json => {
        console.log("joke json", json);
        setJoke(json);
      });
  }, []);

  const { setup, punchline } = joke;

  return (
    <div>
      <h3 style={{ textDecoration: "underline" }}>Joke of the Session</h3>
      <p>Q : {setup}</p>
      <p>Ans : {punchline}</p>
      <span role="img" aria-label="emoji">
        🤣😂😆
      </span>
      {/*for emoji in windows press windows+; */}
    </div>
  );
}

export default Joke;
