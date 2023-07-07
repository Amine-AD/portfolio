import type { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit";
  size?: "sm" | "md" | "lg";
  children?: string;
  color?: string;
  variant?: "solid" | "outline" | "link" | "ghost";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  classes?: string;
}

export default function index({
  type = "button",
  size = "md",
  children,
  color = "red",
  variant = "solid",
  leftIcon,
  rightIcon,
  classes,
}: Props) {
  return (
    <button type={type} className="px-4 h-12 inline-flex gap-4">
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
