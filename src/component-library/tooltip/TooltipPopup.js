import React from 'react';
import { TooltipContext } from "./Tooltip";
import "./Tooltip.css";

export default function TooltipPopup({ children, customCss }) {
    const { color, variant, closeTooltip, isVisible, disableClose } = React.useContext(TooltipContext);

    return (
        isVisible && (
            <div className="tooltip-wrapper">
                <div className={`tooltip ${color} ${variant} ${customCss}`}>
                    <div className="tooltip-icon icon">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 10V3C17 1.89543 16.1046 1 15 1H3C1.89543 1 1 1.89543 1 3V10M17 10V15C17 16.1046 16.1046 17 15 17H3C1.89543 17 1 16.1046 1 15V10M17 10H14.4142C14.149 10 13.8946 10.1054 13.7071 10.2929L11.2929 12.7071C11.1054 12.8946 10.851 13 10.5858 13H7.41421C7.149 13 6.89464 12.8946 6.70711 12.7071L4.29289 10.2929C4.10536 10.1054 3.851 10 3.58579 10H1" className="icon" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="tooltip-content">
                        {children}
                    </div>
                    {!disableClose && (
                        <div className="tooltip-cross accent" onClick={closeTooltip}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_406_464)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" className="accent" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_406_464">
                                        <rect width="20" height="20" rx="6" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    )}
                </div>
            </div>
        )
    );
}