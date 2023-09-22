import { TextField, Stack, Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [interest,setInterest]=useState(0)
  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)
  const [isPrincipleValid,setIsPrincipleValid]=useState(true)
  const [isRateValid,setIsRateValid]=useState(true)
  const [isYearValid,setIsYearValid]=useState(true)

  const handleCalculate=(e)=>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert("Please fill the form completely")
    }else{
      setInterest(principle*rate*year/100)
    }
  }
  const handleReset=()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setIsPrincipleValid (true)
    setIsRateValid(true)
    setIsYearValid(true)

  }
  const validateInput=(e)=>{
    const {value,name}=e.target
    if(!!value.match(/^[0-9]+$/)){
      if(name==="principle"){
        setPrinciple(value)
        setIsPrincipleValid(true)
      }else if(name==="rate"){
        setRate(value)
        setIsRateValid(true)
      }else{
        setYear(value)
        setIsYearValid(true)

      }
    
    }else{
      if(name==="principle"){
        setPrinciple(value)
        setIsPrincipleValid(false)
      }else if(name==="rate"){
        setRate(value)
        setIsRateValid(false)
      }else{
        setYear(value)
        setIsYearValid(false)

      }
    }
  }
  return (
    <div style={{ height: "100vh" }} className='d-flex w-100 justify-content-center align-items-center bg-dark '>
      <div style={{ width: "500px" }} className='bg-light rounded p-5'>
        <div className='heading'>
          <h3>Simple Interest Calculator</h3>
          <p>Calculate your simple interest Easily</p>
        </div>
        <div style={{ height: "150px" }} className="interest-card d-flex flex-column w-100 justify-content-center align-items-center rounded bg-info text-light shadow ">
          <h1>₹ {' '} {interest} </h1>
          <p className='fw-bold'>Total Simple Interest</p>
        </div>
        <form onSubmit={handleCalculate} className='mt-5'>
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic" label="₹ Principal amount" variant="outlined" 
            value={principle || ""} name='principle' onChange={(e)=>validateInput(e)}/>
          </div>
          {
            !isPrincipleValid &&
            <div className='mb-3 text-danger'>
                *Invalid Input
            </div>
          }
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic2" label="Rate of interest (p.a) %" variant="outlined" 
            value={rate || ""} name='rate' onChange={(e)=>validateInput(e)}/>
          </div>
          {
            !isRateValid &&
            <div className='mb-3 text-danger'>
                *Invalid Input
            </div>
          }
          <div className='mb-3'>
            <TextField className='w-100' id="outlined-basic3" label="Time period (Yr)" variant="outlined"
            value={year || ""} name='year' onChange={(e)=>validateInput(e)} />
          </div>
          {
            !isYearValid &&
            <div className='mb-3 text-danger'>
                *Invalid Input
            </div>
          }
          <Stack direction="row" spacing={2}>
            <Button type='submit' style={{width:"200px",height:"70px"}} disabled={isPrincipleValid && isRateValid && isYearValid ? false :true } variant="contained">CALCULATE</Button>
            <Button onClick={handleReset} style={{width:"200px",height:"70px"}} variant="outlined">RESET</Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default App;
