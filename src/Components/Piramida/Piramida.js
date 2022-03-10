import React from 'react'
import suma from '../../suma'

export default function Piramida({questionNumber}) {
  
    
  
    return (
      <>
    
    <div className='piramida'> 
    
    <ul className='moneyList'>
    {suma.map((s,key)=> (
    <li key={key} className={questionNumber === s.id ? "moneyListItem active" : "moneyListItem"}> 
        <span className='moneyListItemNumber'>  {s.id} </span>
        <span className='moneyListItemAmount'>{s.amount}</span>
    </li>
    ))}
    </ul>
    
    </div>
   </>
     
  )
}
