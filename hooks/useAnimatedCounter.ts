import { useState, useEffect } from 'react';

export const useAnimatedCounter = (targetValue: number, duration: number = 1500) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = targetValue;
        if (end === 0) return;

        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentCount = Math.floor(progress * (end - start) + start);
            setCount(currentCount);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                setCount(end);
            }
        };
        window.requestAnimationFrame(step);
    }, [targetValue, duration]);
    
    return count;
};
