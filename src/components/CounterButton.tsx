type Props={
    onClick:()=>void;
    label:string;
}
function CounterButton({onClick,label}:Props){
    return <button onClick={onClick}>{label}</button>
}

export default CounterButton
