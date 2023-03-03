import Friend from './pages/friend/friend';
import Home from './pages/home/home'

function App() {
  const friend = {
    id: 1,
    name: 'jerry'
  }
  return (
    <div className="App">
       <Home></Home>
       <Friend friend={friend}></Friend>
    </div>
  );
}

export default App;
