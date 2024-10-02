import { useState } from 'react'
import './App.css'

function App() {
  let [colour, setColour] = useState("black")

  return (
    <>
    <div className='h-svh w-svw flex justify-center' style={{backgroundColor:colour}}>
      
      <div className='bg-white h-12 m-5 rounded-xl pt-1'>
        <button className='px-6 py-1.5 rounded-xl mx-2 ml-6' style={{backgroundColor:"orange"}} onClick={()=> setColour(colour="orange")}>orange</button>
        <button className='px-6 py-1.5 rounded-xl mx-2' style={{backgroundColor:"white"}}onClick={()=> setColour(colour="white")}>white</button>
        <button className='px-6 py-1.5 rounded-xl mx-2' style={{backgroundColor:"red"}} onClick={()=> setColour(colour="red")}>red</button>
        <button className='px-6 py-1.5 rounded-xl mx-2' style={{backgroundColor:"yellow"}} onClick={()=> setColour(colour="yellow")}>yellow</button>
        <button className='px-6 py-1.5 rounded-xl mx-2' style={{backgroundColor:"green"}} onClick={()=> setColour(colour="green")}>green</button>
        <button className='px-6 py-1.5 rounded-xl mx-2' style={{backgroundColor:"blue"}} onClick={()=> setColour(colour="blue")}>blue</button>
        <button className='px-6 py-1.5 rounded-xl mx-2' style={{backgroundColor:"pink"}} onClick={()=> setColour(colour="pink")}>pink</button>
        <button className='px-6 py-1.5 rounded-xl mx-2 mr-6' style={{backgroundColor:"olive"}} onClick={()=> setColour(colour="olive")}>olive</button>
      </div>
    </div>
    </>
  )
}

export default App
