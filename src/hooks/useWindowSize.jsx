import { useEffect, useState } from 'react';
import { WINDOW_SIZE } from './constants';

export const useWindowSize = () => {
    const calculate = () => {
        const width = window.innerWidth;
        return {
            width,
            height: window.innerHeight,
            sm: width < WINDOW_SIZE.MD,
            md: width >= WINDOW_SIZE.MD,
            lg: width >= WINDOW_SIZE.LG,
            xl: width >= WINDOW_SIZE.XL,
            xxl: width >= WINDOW_SIZE.XXL
        };
    };
    const [windowSize, setWindowSize] = useState(calculate());

    useEffect(() => {
        const handler = () => {
            setWindowSize(calculate());
        };
        window.addEventListener('resize', handler);

        return () => {
            window.removeEventListener('resize', handler);
        };
    }, []);

    return windowSize;
};
