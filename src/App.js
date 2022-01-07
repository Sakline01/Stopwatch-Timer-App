import './App.css';
import Nav from './components/Nav/Nav';
import Timer from './components/TimerApp/Timer';
import Stopwatch from './components/Stopwatch/Stopwatch';
// import Resturent from './components/ResturentCard/Resturent';
import { useState } from 'react';

function App() {
  const [state, setstate] = useState(true);
  const handleHandleClick = (e) => {
    setstate(e);
  }
  return (
    <div>
      <Nav handlCick={handleHandleClick} />
      <div className="App">
        {/* <Resturent/> */}

        {
          state ? <Stopwatch /> : <Timer />
        }

      </div>
    </div>
  );
}

export default App;
