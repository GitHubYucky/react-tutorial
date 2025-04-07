import { ChangeEvent } from "react";

type Props={
    value:number;
    onChange:(value:number)=>void;
}


function CounterInput({value,onChange}:Props){
    const handleInput=(e:ChangeEvent<HTMLInputElement>)=>{
        const newValue=Number(e.target.value);
        if(!isNaN(newValue)){
            onChange(newValue)
        }
    }

    return(
        <input type="number"
        value={value}
        onChange={handleInput}
        style={{marginBottom:'10px'}}
        />
    )
}

export default CounterInput
