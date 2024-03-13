import { useEffect, useRef, useState } from "react";

const useThrottle = (value, delay) => {
    const [throttledValue, setThrottledValue] = useState(value);  // setUp state

    const lastExecuted = useRef(Date.now());

    useEffect(() => {
        const handler = setTimeout(() => {
            const now = Date.now() // Find current date

            const timeElapsed = now - lastExecuted.current;

            if (timeElapsed >= delay) {
                setThrottledValue(value);
                lastExecuted.current = now;
            }

        }, delay - (Date.now() - lastExecuted.current ) );

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return throttledValue;

}

export default useThrottle;