"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Toast {
  id: number;
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
}

interface ToastContextProps {
  toasts: Toast[];
  showToast: (message: string, type?: 'info' | 'success' | 'warning' | 'error') => void;
  hideToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export function useToast () {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

let toastId = 0;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: 'info' | 'success' | 'warning' | 'error' = 'info') => {
    const id = toastId++;
    setToasts((prevToasts) => [...prevToasts, { id, message, type }]);

    // Automatically hide toast after 3 seconds
    setTimeout(() => hideToast(id), 3000);
  };

  const hideToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, showToast, hideToast }}>
      {children}
    </ToastContext.Provider>
  );
};
