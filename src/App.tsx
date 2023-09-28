import { useState } from "react";

import "./App.css";

interface Dots {
  x: number;
  y: number;
  id: number;
}

function App() {
  const [dot, setDot] = useState<Dots[]>([]);

  const handleClick = (e: React.MouseEvent) => {  
    const newDots = {
      id: dot.length + 1,
      x: e.clientX,
      y: e.clientY,
    };
    setDot([...dot, newDots]);
    console.log(newDots)
  };

  const undoDots = () => {

  }

  const redoDots = () => {
    
  }

  return (
    <div className="app">
      <div className="btn-container">
        <button>Undo</button>
        <button>Redo</button>
      </div>
      <div className="dot-container" onClick={handleClick}>
        {dot.map(({ x, y}: Dots, id: number) => (
          <div
            key={`dot-${id}`}
            style={{ top: y, left: x }}
            className="dot"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
