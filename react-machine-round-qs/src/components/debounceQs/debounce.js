import { useEffect, useState } from "react";
import useDebounce from "./debounceHook";


function DebounceComponent() {
    const [value, setValue] = useState('');
    // const [debaounceValue, setDebounceValue] = useState(value);
    const debouncedInput = useDebounce(value, 500);

    // useEffect(() => {
    //     const handler = setTimeout(() => {
    //         setDebounceValue(value);
    //     }, 2000);
    //     return () => {
    //         clearTimeout(handler);
    //     }
    // }, [value])

    useEffect(()=>{
        if(debouncedInput){
            console.log(debouncedInput)
        }
    }, [debouncedInput])

    return (
        <>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <h2>Debounced Value: {debouncedInput}</h2>
            <h2>Value: {value}</h2>
        </>
    )
}

export default DebounceComponent;