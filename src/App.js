
import { useState, useEffect } from 'react';
import './css/app.css';
import Controls from './Controls';

function App() {
  const [temp, setTemp] = useState(0);
  const [tempColor, setTempColor] = useState('freeze');

  useEffect(() => {
    if(temp <= 0) {
      setTempColor('bfreeze');
    }
    if(temp > 0 && temp <= 16) {
      setTempColor('freeze');
    }
    if(temp > 16 && temp <= 25) { 
      setTempColor('cool');
    }
    if(temp > 25 && temp <= 36) { 
      setTempColor('warm');
    }
    if(temp > 36 && temp <= 52) { 
      setTempColor('hot');
    }
    if(temp > 52 && temp <= 80) { 
      setTempColor('superhot');
    }
    if(temp > 80 ) { 
      setTempColor('burnhot');
    }
  }, [temp]);

  return (
    <div className='temp-block'>
      <div className={`temp-box ${tempColor}`}>
        <p className='temp'>{temp}°c</p>
      </div>
      <Controls temp={temp} setTemp={setTemp} tempColor={tempColor}/>
    </div>
  );
}

export default App;
