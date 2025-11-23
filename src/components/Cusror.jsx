import React, { useEffect, useState } from 'react';

const Cursor = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isMouseDevice, setIsMouseDevice] = useState(true);

    useEffect(() => {
        const detectMouseDevice = () => {
            const hasPointer = window.matchMedia("(pointer: fine)").matches;
            const isTouchDevice = navigator.maxTouchPoints > 0;
            setIsMouseDevice(hasPointer && !isTouchDevice);
        };

        detectMouseDevice();

        window.addEventListener('resize', detectMouseDevice);
        window.addEventListener('orientationchange', detectMouseDevice);

        return () => {
            window.removeEventListener('resize', detectMouseDevice);
            window.removeEventListener('orientationchange', detectMouseDevice);
        };
    }, []);

    useEffect(() => {
        if (!isMouseDevice) return;

        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isMouseDevice]);

    if (!isMouseDevice) return null;

    document.body.style.cursor = 'none';

    return (
        <div
            className="custom-cursor"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="var(--clr-bg)" stroke="var(--clr-txt)" strokeWidth="2" d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z" />
            </svg>
        </div>
    );
};

export default Cursor;
