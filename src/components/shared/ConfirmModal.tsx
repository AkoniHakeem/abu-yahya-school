import React from 'react';

interface ConfirmModalProps {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  title?: string;
  confirmText?: string;
  cancelText?: string;
}

export default function ConfirmModal({ 
  isOpen, 
  message, 
  onConfirm, 
  onCancel, 
  title = "Confirm Action",
  confirmText = "Confirm",
  cancelText = "Cancel"
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-on-background/50 backdrop-blur-sm p-4" onClick={onCancel}>
      <div className="bg-surface-container-lowest rounded-xl shadow-2xl max-w-sm w-full border border-surface-variant p-6" onClick={e => e.stopPropagation()}>
        <div className="flex items-center gap-3 mb-4">
          <span className="material-symbols-outlined text-error text-[28px]">warning</span>
          <h3 className="font-headline text-[20px] font-bold text-on-surface">{title}</h3>
        </div>
        <p className="text-on-surface-variant font-body mb-6">{message}</p>
        <div className="flex justify-end gap-3">
          <button 
            onClick={onCancel}
            className="px-5 py-2 rounded-lg font-label-sm font-bold border border-outline text-on-surface-variant hover:bg-surface-container-high transition-colors"
          >
            {cancelText}
          </button>
          <button 
            onClick={() => {
              onConfirm();
              onCancel();
            }}
            className="px-5 py-2 rounded-lg font-label-sm font-bold bg-error text-onError hover:bg-error/90 transition-colors shadow-sm"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
