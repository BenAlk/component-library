import React from 'react';
import "./Toast.css";
import Success from "./images/success.png"
import Info from "./images/info.png"
import Attention from "./images/warning.png"
import Error from "./images/error.png"
;
const ToastContext = React.createContext();

export default function ToastProvider({ children, titleStyle, textStyle }) {
    const [toasts, setToasts] = React.useState([]);

    const addToast = (title, text, variant) => {
        const newToast = { id: Date.now(), title, text, variant };
        setToasts((prevToasts) => [...prevToasts, newToast]);
        setTimeout(() => removeToast(newToast.id), 3500); // Remove toast after 5 seconds
    };

    const removeToast = (id) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    };

    const toastIcons = {
        success: Success,
        info: Info,
        attention: Attention,
        error: Error,
    }

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <div className="toast-container">
                {toasts.map((toast) => (
                    <div key={toast.id} className={`toast toast-${toast.variant}`}>
                        <div className="toast-icon"><img src={toastIcons[toast.variant]} alt={`${toast.variant} logo`}/></div>
                        <div className="toast-title" style={titleStyle}>{toast.title}</div>
                        <div className="toast-text" style={textStyle}>{toast.text}</div>
                        <div className="toast-close" onClick={() => removeToast(toast.id)}>X</div>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export const useToast = () => {
    return React.useContext(ToastContext);
};