import React, { useState, useEffect, useCallback } from 'react';
import "./Tooltip.css";

const TooltipContext = React.createContext();
export { TooltipContext };

export default function Tooltip({ color, variant, disableClose = false, timeout = 3000, children }) {
    const [isVisible, setIsVisible] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [isManuallyClosed, setIsManuallyClosed] = useState(false);

    const closeTooltip = useCallback(() => {
        if (!disableClose) {
            setIsVisible(false);
            setIsManuallyClosed(true);
        }
    }, [disableClose]);

    useEffect(() => {
        let timer;
        if (!isHovered && isVisible) {
            timer = setTimeout(() => {
                closeTooltip();
            }, timeout);
        }

        return () => clearTimeout(timer);
    }, [isHovered, isVisible, timeout, closeTooltip]);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (isManuallyClosed) {
            setIsManuallyClosed(false);
            setIsVisible(true);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <TooltipContext.Provider value={{
            color, variant, closeTooltip, isVisible, disableClose,
            setIsHovered
        }}>
            <div
                className="tooltip-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>
        </TooltipContext.Provider>
    )
}