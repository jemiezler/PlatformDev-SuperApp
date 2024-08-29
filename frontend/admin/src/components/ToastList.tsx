"use client";

import React from 'react';
import { useToast } from '@shared/context/ToastContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
      <TransitionGroup className="space-y-2">
        {toasts.map((toast) => (
          <CSSTransition
            key={toast.id}
            timeout={300}
            classNames="toast"
            unmountOnExit
          >
            <div className={`alert ${getAlertClass(toast.type)} shadow-lg`}>
              <span>{toast.message}</span>
              <button onClick={() => hideToast(toast.id)} className="btn btn-sm btn-ghost">
                ✕
              </button>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <style jsx>{`
        .toast-enter {
          opacity: 0;
          transform: translateX(100%);
        }
        .toast-enter-active {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 300ms, transform 300ms;
        }
        .toast-exit {
          opacity: 1;
          transform: translateX(0);
        }
        .toast-exit-active {
          opacity: 0;
          transform: translateX(100%);
          transition: opacity 300ms, transform 300ms;
        }
      `}</style>
    </div>
  );
}
