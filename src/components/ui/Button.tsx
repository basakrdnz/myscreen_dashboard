import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`px-4 py-2 rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2
          ${variant === "default" ? "bg-black text-white hover:bg-gray-800" : "border border-black text-black bg-white hover:bg-gray-100"}
          ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = "Button"; 