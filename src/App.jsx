import { useState } from 'react';
import './App.css';

function App() {
  const items = [
    {
      label: "AE"
    },
    {
      label: "DE"
    },
    {
      label: "."
    },
    {
      label: "/"
    },
    {
      label: "7"
    },
    {
      label: "8"
    },
    {
      label: "9"
    },
    {
      label: "*"
    },
    {
      label: "4"
    },
    {
      label: "5"
    },
    {
      label: "6"
    },
    {
      label: "+"
    },
    {
      label: "1"
    },
    {
      label: "2"
    },
    {
      label: "3"
    },
    {
      label: "-"
    },
    {
      label: "00"
    },
    {
      label: "0"
    },
    {
      label: "="
    }
  ]
  const [calculatedInput,setCalculatedInput] = useState("")
  const handleInput = (item) => {
    if(item == "="){
    let operator = calculatedInput.split("").findIndex(i=>["-","+","*","/"].includes(i)) 
    let leftInput = calculatedInput.slice(0,operator)
    let rightInput = calculatedInput.slice(operator+1)
    operator = calculatedInput[operator]
    if(operator == "*"){
      setCalculatedInput(leftInput*rightInput)
    }
    if(operator == "+"){
      setCalculatedInput(leftInput+rightInput)
    }
    if(operator == "-"){
      setCalculatedInput(leftInput-rightInput)
    }
    if(operator == "/"){
      setCalculatedInput(leftInput/rightInput)
    }
    }
    else if(item == "AE"){
      setCalculatedInput("")
    }
    else if(item == "DE"){
      setCalculatedInput((prev)=>String(prev).slice(0,-1))
    }
    else{
    setCalculatedInput((prev)=>String(prev)+String(item))
    }
  }
  return (
    <div className="App">
      Calculator
      <div className='div-container'>
        <input className='input'value={calculatedInput}/>
        <div className='flex-container'>
          {items.map((item) => {
            return (
              <button className='flex-items' onClick={()=>{
                handleInput(item.label)
              }}>
               {item.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
