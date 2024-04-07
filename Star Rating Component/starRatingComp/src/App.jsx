import { useState } from "react";
import "./App.css";

function App() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  //console.log( 'rating',rating);
  //console.log('hover' ,hover);
  //console.log((rating && hover) || hover);

  return (
    <div className="app">
      <h2>Star Rating</h2>
      <div>
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() => setRating(num)}
            onMouseOver={() => setHover(num)}
            onMouseLeave={() => setHover(rating)}
          >
            <span
              className={`star ${
                num <= ((rating && hover) || hover) ? "on" : "off"
              } `}
            >
              &#9733;
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
