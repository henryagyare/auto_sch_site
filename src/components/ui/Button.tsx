import { type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Theme = "dark" | "light";

const variantClasses: Record<`${Variant}-${Theme}`, string> = {
  "primary-dark":
    "bg-[#C9922A] text-white hover:bg-[#A67820] active:bg-[#8B6518]",
  "primary-light":
    "bg-[#C9922A] text-white hover:bg-[#A67820] active:bg-[#8B6518]",
  "secondary-dark":
    "border-2 border-white/30 text-white hover:border-white hover:bg-white/10",
  "secondary-light":
    "border-2 border-[#C9922A] text-[#C9922A] hover:bg-[#C9922A] hover:text-white",
  "ghost-dark":
    "text-[#94A3C8] hover:bg-white/10 hover:text-white",
  "ghost-light":
    "text-[#6B7280] hover:bg-[#F3EDE3] hover:text-[#1C1C2E]",
};

export default function Button({
  children,
  variant = "primary",
  theme = "dark",
  className = "",
  ...props
}: {
  children: React.ReactNode;
  variant?: Variant;
  theme?: Theme;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`inline-flex cursor-pointer items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold leading-snug transition-colors ${variantClasses[`${variant}-${theme}`]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
