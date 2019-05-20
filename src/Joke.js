import React from "react";

import { useFetch } from "./hooks";

function Joke() {
  const { setup, punchline } = useFetch(
    "https://official-joke-api.appspot.com/jokes/random",
    {}
  );

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
