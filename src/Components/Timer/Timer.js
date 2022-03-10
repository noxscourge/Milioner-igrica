import {useState,useEffect} from 'react'
import './Timer.css';
import '../Containter_AQ/Container_AQ'

export default function Timer({setStop,questionNumber,stop,restart}) {
  
    const [timer,setTimer] = useState(30)
    
    useEffect(() => {
      
      if (timer===0) return setStop(true);
        const interval = setInterval(()=>{
            setTimer(prev=>prev-1)
        },1000);
        
      return () => clearInterval(interval);
    },[setStop,timer]);

    useEffect(()=>{
      setTimer(30);
    },[questionNumber,restart]);

    return (
      <>
      
      {stop ? 
      <div>
      </div>
      : (
      
        <div className='time'> {timer} </div>
    )}
    </>
       
  )};
  