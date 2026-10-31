import { useState } from 'react'

import './App.css'

function App() {
  const [color,setColor]=useState('olive');

  return (
<div 
    style={{
      backgroundColor:color,
      minHeight: '100vh',
      width: '100%',
      padding:'10px',
     display:'flex',
        justifyContent:'center',
        alignItems:'center',

    }}>
      <div
      style={{
        backgroundColor:'black',
        padding:'8px',
        marginTop:'70vh',
        width:'50%',
       borderRadius:'15px',
       color:'white',
       position:'fixed',
      }}
      >
      
      <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:'5px'
        }}>
        <button onClick={()=>setColor('red')}
          style={{
            backgroundColor:'red',
            padding:'8px',
            borderRadius:'10px',
            margin:'10px',
            color:'white'
            
          }}
          >red</button>
          <button onClick={()=>setColor('deeppink')}
          style={{
            backgroundColor:'deeppink',
            padding:'8px',
            borderRadius:'10px',
            margin:'10px',
            color:'white'
            
          }}
          >pink</button>
          <button onClick={()=>setColor('yellow')}
          style={{
            backgroundColor:'yellow',
            padding:'8px',
            borderRadius:'10px',
            margin:'10px',
            color:'black'
            
          }}
          >yellow</button>
          <button onClick={()=>setColor('green')}
          style={{
            backgroundColor:'green',
            padding:'8px',
            borderRadius:'10px',
            margin:'10px',
            color:'white'
            
          }}
          >green</button>
          <button onClick={()=>setColor('blue')}
          style={{
            backgroundColor:'blue',
            padding:'8px',
            borderRadius:'10px',
            margin:'10px',
            color:'white'
            
          }}
          >blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
