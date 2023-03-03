import { ReactDOM } from "react";

function App() {
  const ele = <h1 title="home">hello world</h1>
  const container = document.getElementById('App')
  ReactDOM.render(ele, container)

  return (
    <div className="App">
    </div>
  );
}

export default App;
