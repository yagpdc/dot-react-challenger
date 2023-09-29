import { useState } from "react";

import "./App.css";

interface Dots {
  x: number;
  y: number;
  id: number;
}

function App() {
  const [dot, setDot] = useState<Dots[]>([]);
  const [cache, setCache] = useState<Dots[]>([])

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
    if (dot.length > 0) {
      const newDots = [...dot]
      const lastDot = newDots.pop() as Dots
      setCache([...cache, lastDot]),setDot(newDots)
    } 
  }

  const redoDots = () => {
    if (cache.length > 0) {
      const newCache = [...cache]
      const lastCache = newCache.pop() as Dots
      setCache(newCache),setDot([...dot, lastCache])
    }
  }

  return (
    <div className="app">
      <div className="btn-container">
        <button onClick={undoDots}>Undo</button>
        <button onClick={redoDots}>Redo</button>
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
  )
}
export default App;
