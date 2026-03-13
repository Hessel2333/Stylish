"use client";

import { cn } from "@/lib/utils/cn";

type ModalProps = {
  open: boolean;
  title: string;
  description?: string;
  children?: React.ReactNode;
  onClose: () => void;
  closeLabel?: string;
  backdropLabel?: string;
};

export const Modal = ({
  open,
  title,
  description,
  children,
  onClose,
  closeLabel = "Close",
  backdropLabel = "Close modal backdrop"
}: ModalProps) => {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label={backdropLabel}
        onClick={onClose}
        className="ui-modal-backdrop absolute inset-0"
      />
      <div
        className={cn(
          "ui-modal-panel relative z-10 w-full p-[var(--space-lg)]"
        )}
        style={{ maxWidth: "var(--ui-modal-max-width,var(--modal-max-width))" }}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="title-display text-2xl text-token-primary">{title}</h3>
            {description ? <p className="mt-2 text-token-secondary">{description}</p> : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="ui-modal-close focus-ring inline-flex h-[var(--control-sm)] w-[var(--control-sm)] items-center justify-center rounded-[var(--radius-sm)]"
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
