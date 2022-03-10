import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import data from '/kviz_final/kviz_app/src/data';
import suma from '../../suma';
import correct from "/kviz_final/kviz_app/src/assets/correct.mp3";
import wrong from "/kviz_final/kviz_app/src/assets/wrong.mp3";
import checking_answer from "/kviz_final/kviz_app/src/assets/checking_answer.mp3";



export default function Containter_AQ({questionNumber, setQuestionNumber, setStop, stop}) {


  //const {id,question,answer} = data

  const [Correct] = useSound(correct)
  const [Wrong] = useSound(wrong)
  const [Checking_answer] = useSound(checking_answer)

const [question,setQuestion]  = useState(null);
const [selectedAnswer,setSelectedAnswer] = useState(null)
const [className,setClassName] = useState("answer");
const [earned,setEarned] = useState('$ 0');
const [disable,setDisabled] = useState(false);


const delay = (duration,callback)  =>
{
  setTimeout(() => {
    callback();
}, duration);
};


useEffect(() =>
{
  (questionNumber>1) && setEarned(suma.find((m)=> m.id === questionNumber-1).amount);
},[questionNumber]);






useEffect(()=>{
  setQuestion(data[questionNumber-1]);
},[data,questionNumber]);


const restartuj = () =>
{
  setQuestionNumber(1);
  setSelectedAnswer(null);
  setStop(false);
}


const handleClick = (a) =>
{
  
  if (!disable) {
  setDisabled(true);
  setSelectedAnswer(a);
  setClassName("answer active");
  Checking_answer();
  delay(2500, ()=>
   setClassName(a.correct ? "answer correct" : "answer wrong")
   
  );

  
  
  delay(6000, ()=>{
    
    if (a.correct)
    {
      
      Correct();

      delay(3000,()=> {
      setDisabled(false);
      setQuestionNumber(prev=>prev+1);
      setSelectedAnswer(null);
      })
    } 
    else{


      Wrong();

      delay(3000, ()=> {
      setTimeout(true);
      setStop(true);
      setDisabled(false);
      })
    }
    
  });
  
}

};


  return (
   
    <>

    {stop ? 
      <div className='game_info'> 
      <h1 className='game_over2'> GAME OVER </h1>
      <h1 className='game_over'> Zaradili ste : {earned} </h1>
      
      <button className='ggs1' onClick={restartuj}> Restart </button>
      </div>
: (
    
    <div className='container'>
     
    <div className='question'> {question?.question}</div>
    <div className='answers'> 
     {question?.answers.map((a,key)=>
    <div key={key} className={selectedAnswer=== a ? className:"answer" } onClick={()=>handleClick(a)}> {a.text} </div>
     )}
    
    </div>
    </div>
    
  )}
  </>
     
)};
