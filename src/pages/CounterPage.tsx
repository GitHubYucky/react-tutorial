import { useEffect, useState } from 'react';
import CounterDisplay from '../components/CounterDisplay';
import CounterButton from '../components/CounterButton';
import CounterInput from '../components/CounterInput';

const CounterPage=()=>{
  const [count, setCount] = useState<number>(0);

  const increase=()=>setCount(count+1);
  const decrease=()=>setCount(count-1);
  const handleInput=(value:number)=>setCount(value);

  useEffect(()=>{
    setCount(10);
  },[])

  useEffect(()=>{
    console.log(`count is now ${count}`)
  },[])

  return(
    <div style={{textAlign:"center",marginTop:"50px"}}>
        <h1>Counter App</h1>
        <CounterInput value={count} onChange={handleInput} />
        <CounterDisplay count={count} />
        <CounterButton onClick={increase} label="Add 1" />
        <CounterButton onClick={decrease} label="Subtract 1" />
    </div>
  )
}

export default CounterPage
