import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'


import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [counter ,  setCount]=useState(0);
  let increase=()=>{
    counter=counter+1;
    if(counter>20){
      setCount(20);
    }
    else setCount(counter);
  }
  let decrease=()=>{
    counter=counter-1;
    if(counter<0){
      setCount(0);
    }
    else  setCount(counter);
  }
  return (
    <>
      <h1>neha this is me </h1>
      <h2>counter value : {counter}</h2>
      <button  onClick={increase} className='bg-blue'>increase the count</button>
      <br/>

      <button onClick={decrease}>decrease the count</button>
    </>
  )
}

export default App

