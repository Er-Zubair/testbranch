import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { clsx } from '@/lib/clsx';

interface BaseFieldProps {
  label: string;
  error?: string;
  hideLabel?: boolean;
}

type InputProps = BaseFieldProps & InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = BaseFieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

const fieldClasses =
  'w-full bg-surface-container-low border rounded-lg px-4 py-3 font-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-1 transition-colors';

function fieldBorderClasses(hasError: boolean) {
  return hasError
    ? 'border-error focus:border-error focus:ring-error'
    : 'border-outline-variant/50 focus:border-primary focus:ring-primary';
}

export function Input({ label, error, hideLabel, id, className, ...props }: InputProps) {
  const inputId = id ?? props.name;
  return (
    <div>
      <label className={hideLabel ? 'sr-only' : 'block font-label-bold text-sm text-on-surface mb-1.5'} htmlFor={inputId}>
        {label}
      </label>
      <input
        id={inputId}
        className={clsx(fieldClasses, fieldBorderClasses(Boolean(error)), className)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="mt-1.5 text-sm text-error font-body-md" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function Textarea({ label, error, hideLabel, id, className, ...props }: TextareaProps) {
  const inputId = id ?? props.name;
  return (
    <div>
      <label className={hideLabel ? 'sr-only' : 'block font-label-bold text-sm text-on-surface mb-1.5'} htmlFor={inputId}>
        {label}
      </label>
      <textarea
        id={inputId}
        className={clsx(fieldClasses, 'resize-none', fieldBorderClasses(Boolean(error)), className)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="mt-1.5 text-sm text-error font-body-md" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
