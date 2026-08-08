import React from 'react';

interface AlertModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
  title?: string;
}

export default function AlertModal({ isOpen, message, onClose, title = "Notification" }: AlertModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-on-background/50 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-surface-container-lowest rounded-xl shadow-2xl max-w-sm w-full border border-surface-variant p-6" onClick={e => e.stopPropagation()}>
        <div className="flex items-center gap-3 mb-4">
          <span className="material-symbols-outlined text-primary text-[28px]">info</span>
          <h3 className="font-headline text-[20px] font-bold text-on-surface">{title}</h3>
        </div>
        <p className="text-on-surface-variant font-body mb-6">{message}</p>
        <div className="flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 rounded-lg font-label-sm font-bold bg-primary text-on-primary hover:bg-primary/90 transition-colors shadow-sm"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
