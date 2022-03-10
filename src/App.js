import './App.css';
import { useState, useEffect } from 'react';
import Timer from "./Components/Timer/Timer";
import Piramida from './Components/Piramida/Piramida';
import Containter_AQ from './Components/Containter_AQ/Container_AQ';
import useSound from 'use-sound';
import play from "/kviz_final/kviz_app/src/assets/play2.mp3";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Start_Game from './Components/Start_Game/Start_Game';

function App() 
{
 
  const [Play] = useSound(play)

  const [questionNumber,setQuestionNumber] = useState(1);
  const [stop,setStop] = useState(false);
  const [timer, setTimer] = useState(30);
  const [start,setStart] = useState(true);
  const restart = () =>
  {
    setTimer(30);
    setQuestionNumber(1);
    setStop(false);
  }
  
  useEffect(()=>
  {
    
   Play();

  },[Play]);

 



  return (
     
    
    <>
  {start ? (<div className='app'>

<div className='main'>

<div className='top'> 

<Timer  setStop={setStop} questionNumber={questionNumber} stop={stop} restart={restart}/>
</div>
<div className='bottom'>
  
<Containter_AQ questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} setStop={setStop} stop={stop} />
  </div>
</div>

<Piramida questionNumber={questionNumber}/>


</div> ) : <Start_Game/>  
    
  
}
  </> )}
 
  
  


export default App;
