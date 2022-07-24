import React,{useState} from 'react'

const Schedule = () => {
  const [state,setState]=useState('a')
  const toggle=()=>{
    setState((state)=>state==='a'?'b':'a')
  }
  return (
    <div>
    
    Schedule
    <button onClick={toggle}>
    toggle
    </button>
    {

    <div className={state}>
    a day
    </div>
    }

    </div>
  )
}

export default Schedule