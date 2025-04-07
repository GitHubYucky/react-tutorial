import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { increment,decrement } from "../features/counter/CounterSlice";

const Counter=()=>{
    const count=useSelector((state:any)=>state.counter.value);
    const dispatch=useDispatch();

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>
    )
}
export default Counter
