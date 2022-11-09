import React, { useEffect } from 'react';
import Circle from './components/Circle';
import './components/Progress.css';
import { useState } from 'react';

function App() {
  const[circle] = useState(4);
  const[active, setActive] = useState(0)
  const[width, setWidth] = useState(0)
  console.log(active);
  const arr = [];
  useEffect(() => {
    setWidth(100/(circle - 1)*active)
  }, [circle, active])
  for (let i = 0; i < circle; i++) {
    arr.push(<Circle className={i < active ? 'circle active' : 'circle'} key={i}>{i}</Circle>);
  }

  return (
    <div className="container">
      <div className="content">
        <div className="pregerssbar">
          <div className="pregerss" style={{width:width + "%"}}></div>
          {arr}
        </div>
        <div className="button">
          <button className='prev btn' disabled={active > 0 ? false : true} onClick={() => {active <= 0 ? setActive(0) : setActive(active - 1)}}>Prev</button>
          <button className='next btn' disabled={active <= circle - 2 ? false : true} onClick={() => {active >= circle ? setActive(circle) : setActive(active + 1)}}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default App;