import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello weekend</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );
}

export default Home;
