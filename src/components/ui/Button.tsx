import { type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary";
type Theme = "dark" | "light";

const variantClasses: Record<`${Variant}-${Theme}`, string> = {
  "primary-dark":
    "border-2 border-[#76b900] bg-transparent text-white hover:bg-[#1eaedb] hover:border-[#1eaedb] active:bg-[#007fff]",
  "primary-light":
    "border-2 border-[#76b900] bg-transparent text-black hover:bg-[#1eaedb] hover:border-[#1eaedb] hover:text-white active:bg-[#007fff] active:text-white",
  "secondary-dark":
    "border border-[#76b900] bg-transparent text-white hover:bg-[#1eaedb] hover:border-[#1eaedb]",
  "secondary-light":
    "border border-[#76b900] bg-transparent text-black hover:bg-[#1eaedb] hover:border-[#1eaedb] hover:text-white",
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
      className={`inline-flex cursor-pointer items-center justify-center rounded-[2px] px-[13px] py-[11px] text-base font-bold leading-[1.25] transition-colors ${variantClasses[`${variant}-${theme}`]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
