import { useState, useEffect } from "react";

export default function TooltipManager() {
    const [tooltips, setTooltips] = useState({});
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

    const calculatePos = (tooltipBound, targetBound, screenBound, margin = 16) => {
        const setToTop = () => ({
            left: targetBound.x + targetBound.width / 2 - tooltipBound.width / 2,
            top: targetBound.y - tooltipBound.height - margin,
            v: 'top'
        });

        const setToBottom = () => ({
            left: targetBound.x + targetBound.width / 2 - tooltipBound.width / 2,
            top: targetBound.y + targetBound.height + margin,
            v: 'bottom'
        });

        const setToLeft = () => ({
            left: targetBound.x - tooltipBound.width - margin,
            top: targetBound.y + targetBound.height / 2 - tooltipBound.height / 2,
            v: 'left'
        });

        const setToRight = () => ({
            left: targetBound.x + targetBound.width + margin,
            top: targetBound.y + targetBound.height / 2 - tooltipBound.height / 2,
            v: 'right'
        });

        const adjustToScreen = (pos) => {
            const { v } = pos;
            if (v === 'top') pos.top = Math.max(pos.top, screenBound.y);
            if (v === 'bottom') pos.top = Math.min(pos.top, screenBound.height - tooltipBound.height);
            if (v === 'left') pos.left = Math.max(pos.left, screenBound.x);
            if (v === 'right') pos.left = Math.min(pos.left, screenBound.width - tooltipBound.width);
            return pos;
        };

        const positions = [setToTop, setToBottom, setToLeft, setToRight];

        for (const positionFn of positions) {
            const result = positionFn();
            const adjusted = adjustToScreen(result);
            if (
                adjusted.top >= screenBound.y &&
                adjusted.top + tooltipBound.height <= screenBound.height &&
                adjusted.left >= screenBound.x &&
                adjusted.left + tooltipBound.width <= screenBound.width
            ) {
                return adjusted;
            }
        }

        return adjustToScreen(setToTop());
    };

    const createTooltip = (element) => {
        if (!isMouseDevice) return null; // Prevent tooltip creation on touch devices

        const content = element.getAttribute('data-tooltip-content')?.trim();
        if (!content) return;

        const tooltipId = `tooltip-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

        const tempTooltip = document.createElement('span');
        tempTooltip.className = 'tooltip';
        tempTooltip.style.visibility = 'hidden';
        tempTooltip.textContent = content;
        document.body.appendChild(tempTooltip);

        const targetBound = element.getBoundingClientRect();
        const tooltipBound = tempTooltip.getBoundingClientRect();
        const screenBound = {
            x: 0,
            y: 0,
            height: window.innerHeight,
            width: window.innerWidth
        };

        const position = calculatePos(tooltipBound, targetBound, screenBound);
        document.body.removeChild(tempTooltip);

        setTooltips(prev => ({
            ...prev,
            [tooltipId]: { content, position, id: tooltipId }
        }));

        return tooltipId;
    };

    const removeTooltip = (tooltipId) => {
        setTooltips(prev => {
            const newTooltips = { ...prev };
            delete newTooltips[tooltipId];
            return newTooltips;
        });
    };

    useEffect(() => {
        if (!isMouseDevice) return; // Stop event listeners if no mouse

        const tooltipElements = document.querySelectorAll('[data-tooltip-content]');
        const activeTooltips = new Map();

        const handleMouseEnter = (e) => {
            const element = e.target;
            const delay = parseInt(element.getAttribute('data-tooltip-delay'), 10) || 1000;
            const timeoutId = setTimeout(() => {
                const tooltipId = createTooltip(element);
                if (tooltipId) activeTooltips.set(element, tooltipId);
            }, delay);
            element.dataset.tooltipTimeout = timeoutId;
        };

        const handleMouseLeave = (e) => {
            const element = e.target;
            const timeoutId = element.dataset.tooltipTimeout;
            if (timeoutId) {
                clearTimeout(Number(timeoutId));
                delete element.dataset.tooltipTimeout;
            }

            const tooltipId = activeTooltips.get(element);
            if (tooltipId) {
                removeTooltip(tooltipId);
                activeTooltips.delete(element);
            }
        };

        tooltipElements.forEach((element) => {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            tooltipElements.forEach((element) => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);

                const timeoutId = element.dataset.tooltipTimeout;
                if (timeoutId) clearTimeout(Number(timeoutId));
            });
        };
    }, [isMouseDevice]);

    if (!isMouseDevice) return null; // Prevent rendering tooltips on touch devices

    return (
        <>
            {Object.values(tooltips).map(tooltip => (
                <span
                    key={tooltip.id}
                    className="tooltip"
                    style={{
                        top: tooltip.position.top,
                        left: tooltip.position.left,
                        opacity: 1,
                        visibility: 'visible',
                    }}
                >
                    {tooltip.content}
                </span>
            ))}
        </>
    );
}
