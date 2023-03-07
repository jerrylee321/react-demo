// import Friend from './pages/friend/friend';
import Home from './pages/home/home'
import { Button } from 'antd';

function App() {
  // const friend = {
  //   id: 1,
  //   name: 'jerry'
  // }
  return (
    <div className="App">
       <Home></Home>
       <Button>点我</Button>
       {/* <Friend friend={friend}></Friend> */}
    </div>
  );
}

export default App;
