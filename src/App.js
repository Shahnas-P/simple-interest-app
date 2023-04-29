import { useState } from 'react';
import './App.css';
import { TextField, Button, Stack } from '@mui/material';
// import Stack from '@mui/joy/Stack';

function App() {
  ////////////////////////////////////// js code    //////////////////////////////////////////
 //function call while submitting the form  - click on calculate button
  const  handleSubmit  = (e)=>{
    //To prevent reloading  web page 
    e.preventDefault()
    //check your input the data  
    //conditinal redendring 
    if(principle,interest,year){
      console.log(principle);
      console.log(interest);
      console.log(year);
      console.log(result);
      setResult(principle * interest* year/100)
    }else{
      alert('Please enter the valid data')
    }
   
    
  }

  //function to reset the form 
   
  const reset = ()=>{
   
    setResult(0)
    setPrinciple("")
    setInterest("")
    setYear("")
  }

  //state to hold values

  const [principle, setPrinciple] = useState(0)
  const [interest, setInterest] = useState(0)
  const [year, setYear] = useState(0)
  const [result, setResult] = useState(0)

  ////////////////////////////////////  html code    //////////////////////////////////////////

  return (
    <div className="simpleInterstApp">
      <div className="container">
        <div className="heading_text">
          <h1 className="heading_one">Simple Calculator</h1>
          <p className="heading_two">Calculate your simple interest easyly</p>
        </div>
        <div className="total_amount_card">
          <div className="card_text">
            <h3 className="total_amount_heading">₹ {result}</h3>
            <p className="total_amount_para">Total simple interest</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} >
          <div className="inputs">
            <div className="input_field">
              <TextField value={principle || ""}  onChange={(e => setPrinciple(e.target.value))} type='number' className="outlined-basic" label="₹  Principle Amount" variant="outlined" />
            </div>
            <div className="input_field">
              <TextField value={interest || ""} onChange={(e => setInterest(e.target.value))} type='number' className="outlined-basic" label="Rate of Interest (p.a) %" variant="outlined" />
            </div>
            <div className="input_field">
              <TextField value={year || ""} onChange={(e => setYear(e.target.value))} type='number' className="outlined-basic" label="Time Period (yr)" variant="outlined" />
            </div>
          </div>
          <div className="buttons">
            {/* Stack component */}
            <Stack direction="row" spacing={2}>
              <Button type='submit' className='btn' style={{ backgroundColor: 'black' }} variant="contained">CALUCULATE</Button>
              <Button onClick={reset} className='btn' variant="outlined">RESET</Button>
            </Stack>

          </div>
        </form>
      </div>

    </div>
  );
}

export default App;
