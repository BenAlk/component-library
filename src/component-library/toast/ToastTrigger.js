import React from 'react';
import { useToast } from './ToastProvider.js';
import "./Toast.css";

export default function ToastTrigger({styleClassName, title, text, variant, style, children}) {
    const { addToast } = useToast();

    const showToast = () => {
        addToast(title, text, variant);
    };

    return (
        <div className={`toast-trigger ${styleClassName}`} onClick={showToast} style={style}>{children}</div>
    );
}