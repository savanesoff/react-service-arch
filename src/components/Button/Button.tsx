import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "danger" | "secondary";
  loading?: boolean;
}

const base =
  "px-3 py-1 rounded font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";
const variants = {
  primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400",
  danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  loading = false,
  children,
  className = "",
  disabled,
  ...props
}) => (
  <button
    className={`${base} ${variants[variant]} ${className} cursor-pointer`}
    disabled={disabled || loading}
    {...props}
  >
    {loading ? <span className="animate-pulse">Loading...</span> : children}
  </button>
);
