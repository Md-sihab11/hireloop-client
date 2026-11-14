import type { ReactNode } from "react";

import { Input } from "@/components/ui/input";
import { cn } from "cn";

type FormFieldProps = {
  /** Unique id, also used to link the label to the input. */
  id: string;
  /** Submitted with the form, e.g. "email". */
  name: string;
  label: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  /** Validation message shown in red under the input. */
  error?: ReactNode;
  className?: string;
};

/** One labelled input with the landing-page label + error styling. */
export function FormField({
  id,
  name,
  label,
  type = "text",
  placeholder,
  autoComplete,
  required,
  error,
  className,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-[11px] font-semibold tracking-[0.18em] text-white/55 uppercase"
      >
        {label}
      </label>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={error ? true : undefined}
        className={cn(
          "h-10 border-white/[0.1] bg-white/[0.03] px-3.5 text-sm text-white placeholder:text-white/30",
          error && "border-destructive/60",
          className
        )}
      />
      {error ? (
        <p className="text-xs text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
