import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
}

export function Button({
  className = "",
  variant = "primary",
  size = "default",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none disabled:opacity-50 select-none cursor-pointer"

  const variants = {
    primary:
      "bg-primary-container hover:bg-secondary text-on-primary shadow-level-1 hover:shadow-level-2",
    secondary:
      "bg-secondary text-on-secondary shadow-level-1 hover:bg-primary-container",
    outline:
      "bg-transparent border-2 border-primary-container hover:border-secondary text-primary hover:text-secondary",
    ghost: "bg-transparent hover:bg-surface-ice text-primary",
  }

  const sizes = {
    default: "px-6 py-3 text-sm rounded-md",
    sm: "px-4 py-2 text-xs rounded-md",
    lg: "px-8 py-4 text-base rounded-md",
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  )
}
