import { createFactory, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [count, setCount] = useState(0);
  function changer (){
    
    setCount(count+1);}
  return (
    <>

     <button onClick={changer}>Osama {count} </button>;

    
    </>
  )
}

export default App