import { useState, useEffect } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count >= 100) {
        clearInterval(interval);
      } else {
        setCount((prevCount) => prevCount + 1);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [count]); 

  return (
    <div className='main'>
      <p>Progress Bar</p>
      <ProgressBar className='bar' completed={count} />
      {count >= 100 ? <p>Completed</p> : <p>Loading</p>}
    </div>
  );
}

export default App;