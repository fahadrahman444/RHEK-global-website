"use client";

import React, { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";

export interface FieldBaseProps {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  containerClassName?: string;
}

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    FieldBaseProps {}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      error,
      helperText,
      required,
      id: customId,
      className,
      containerClassName,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = customId || generatedId;
    const errorId = `${id}-error`;
    const helperId = `${id}-helper`;

    return (
      <div className={cn("w-full", containerClassName)}>
        {label && (
          <label htmlFor={id} className="block text-[12.5px] font-semibold text-brand-black mb-1.5">
            {label} {required && <span className="text-brand-red">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={cn(
            "w-full rounded-lg border bg-white px-3.5 py-2.5 min-h-[44px] text-[13.5px] text-brand-black placeholder:text-zinc-400 transition-colors",
            "focus:border-brand-black focus:ring-1 focus:ring-brand-black focus-visible:outline-none",
            error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-zinc-200",
            className
          )}
          {...props}
        />
        {error && (
          <p id={errorId} role="alert" className="mt-1 text-[12px] font-medium text-red-600">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={helperId} className="mt-1 text-[12px] text-brand-caption">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
TextInput.displayName = "TextInput";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    FieldBaseProps {
  options?: Array<{ label: string; value: string }>;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      helperText,
      required,
      id: customId,
      className,
      containerClassName,
      children,
      options,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = customId || generatedId;
    const errorId = `${id}-error`;

    return (
      <div className={cn("w-full", containerClassName)}>
        {label && (
          <label htmlFor={id} className="block text-[12.5px] font-semibold text-brand-black mb-1.5">
            {label} {required && <span className="text-brand-red">*</span>}
          </label>
        )}
        <select
          ref={ref}
          id={id}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            "w-full rounded-lg border bg-white px-3.5 py-2.5 min-h-[44px] text-[13.5px] text-brand-black transition-colors",
            "focus:border-brand-black focus:ring-1 focus:ring-brand-black focus-visible:outline-none",
            error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-zinc-200",
            className
          )}
          {...props}
        >
          {options
            ? options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))
            : children}
        </select>
        {error && (
          <p id={errorId} role="alert" className="mt-1 text-[12px] font-medium text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    FieldBaseProps {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      helperText,
      required,
      id: customId,
      className,
      containerClassName,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = customId || generatedId;
    const errorId = `${id}-error`;

    return (
      <div className={cn("w-full", containerClassName)}>
        {label && (
          <label htmlFor={id} className="block text-[12.5px] font-semibold text-brand-black mb-1.5">
            {label} {required && <span className="text-brand-red">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            "w-full rounded-lg border bg-white px-3.5 py-2.5 text-[13.5px] text-brand-black placeholder:text-zinc-400 transition-colors resize-y min-h-[100px]",
            "focus:border-brand-black focus:ring-1 focus:ring-brand-black focus-visible:outline-none",
            error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-zinc-200",
            className
          )}
          {...props}
        />
        {error && (
          <p id={errorId} role="alert" className="mt-1 text-[12px] font-medium text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
