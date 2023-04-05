import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const incrementCount = () => {
    setCount((count) => count + 1);
  };

  const decrementCount = () => {
    setCount((count) => count - 1);
  };

  return (
    <div class="container">
      <h1 class="Title-Counter">Contador</h1>
        <div>
          <p class="text-counter">{count}</p>
        </div>
      <button onClick={decrementCount}>Disminuir</button>
      <button onClick={incrementCount}>Aumentar</button>
    </div>
  );
}

export default Counter;
