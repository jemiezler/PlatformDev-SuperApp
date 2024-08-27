"use client";

import React from 'react';
import { useToast } from '@shared/context/ToastContext';

export default function ToastList() {
  const { toasts, hideToast } = useToast();
  const getAlertClass = (type: 'info' | 'success' | 'warning' | 'error' = 'info') => {
    switch (type) {
      case 'success':
        return 'alert-success';
      case 'warning':
        return 'alert-warning';
      case 'error':
        return 'alert-error';
      default:
        return 'alert-info';
    }
  };

  return (
    <div className="fixed top-5 right-5 space-y-2">
      {toasts.map((toast) => (
        <div key={toast.id} className={`alert ${getAlertClass(toast.type)} shadow-lg`}>
            <span>{toast.message}</span>
          <button onClick={() => hideToast(toast.id)} className="btn btn-sm btn-ghost">
              ✕
            </button>
        </div>
      ))}
    </div>
  );
};