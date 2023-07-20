import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const faIcon = [<FontAwesomeIcon icon={faPlus} />, <FontAwesomeIcon icon={faMinus} />]

const Controls = ({temp,setTemp}) => {

  //Mouse on click
  const increaseTemp = () => {
    setTemp(temp + 1);
  }
  const decreaseTemp = () => {
    setTemp(temp - 1);
  }

  //Mouse on hold
  const timer = useRef(0);
  const holdIncreaseTemp = () => {
    timer.current = setInterval(() => setTemp(prev => prev + 1), 300);
  }
  const holdDecreaseTemp = () => {
    timer.current = setInterval(() => setTemp(prev => prev - 1), 300);
  }
  const timeoutClear = () => {
    clearTimeout(timer.current)
  }

  return (
    <div className='temp-btn-box'>
      <button className='temp-btn-hot'
        onClick={decreaseTemp}
        onMouseLeave={timeoutClear}
        onMouseUp={timeoutClear}
        onMouseDown={holdDecreaseTemp}
      >{faIcon[1]}</button>

      <button className='temp-btn-cold'
        onClick={increaseTemp}
        onMouseLeave={timeoutClear}
        onMouseUp={timeoutClear}
        onMouseDown={holdIncreaseTemp}
      >{faIcon[0]}</button>
    </div>
  );
}

export default Controls;