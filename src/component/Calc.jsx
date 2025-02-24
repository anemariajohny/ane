import { useState } from 'react';

export default function Counter() {
  const [result, setResult]=useState(0);
  const[input1, setOne]=useState(0);
  const[input2, setTwo]=useState(0);
  function handleAdd() {
    setResult(parseInt (input1) + parseInt(input2));
  }
    function handleSub() {
    setResult(parseInt (input1) - parseInt(input2));
    }
      function handleMul() {
    setResult(parseInt (input1) * parseInt(input2));
      }
        function handleDiv() {
            
    setResult(parseInt (input1) / parseInt(input2));
              
  }
  
  function handleRes() {
    setResult(0);
              
  }
  function handleChange1 (e) {
      setOne(e.target.value);
    }
   function handleChange2 (e) {
      setTwo(e.target.value);
    }

  return (
    <>
    <input type = 'number' placeholder="Enter your first number" onChange={handleChange1}/>
    <input type = 'number' placeholder="Enter your second number" onChange={handleChange2}/>
      <button onClick = {handleAdd}>
      ADD
      </button>
      <button onClick = {handleSub}>
      Sub
      </button>
      <button onClick = {handleMul}>
      Multiply
      </button>
      <button onClick = {handleDiv}>
      Div
      </button>
      <button onClick = {handleRes}>
      Reset
      </button>
      <h1>Your result is {result}</h1>
    </> 
  );
}
