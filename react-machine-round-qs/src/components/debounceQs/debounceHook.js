import { useEffect, useState } from "react";


function useDebounce(value, delays) {
    const [debouncedValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, 2000);

        return () => {
            clearTimeout(handler);
        };

    }, [value, delays]);


    return debouncedValue;

}

export default useDebounce;