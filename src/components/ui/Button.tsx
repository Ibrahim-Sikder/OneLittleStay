"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "custom";
  href?: string;
  className?: string;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  customPadding?: string;
  customFontSize?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  fullWidth = false,
  icon,
  iconPosition = "right",
  customPadding,
  customFontSize,
  onClick,
  disabled = false,
  type = "button",
  ...props
}: ButtonProps) {
  // Base styles
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200";

  // Size variants
  const sizeStyles = {
    xs: "px-3 py-1.5 text-xs",
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
    xl: "px-8 py-3.5 text-base",
    custom: `${customPadding || "px-5 py-2.5"} ${customFontSize || "text-sm"}`,
  };

  // Variant styles
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary-dark active:scale-95",
    secondary: "bg-secondary text-white hover:bg-secondary/90 active:scale-95",
    outline:
      "border-2 border-primary text-primary bg-transparent hover:bg-primary/10 active:scale-95",
    ghost: "text-primary bg-transparent hover:bg-primary/10 active:scale-95",
  };

  const widthStyles = fullWidth ? "w-full" : "";
  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed"
    : "hover:scale-105";

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyles} ${disabledStyles} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </>
  );

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={combinedClassName} onClick={onClick}>
        {content}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
