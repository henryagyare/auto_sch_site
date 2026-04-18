import { type ButtonHTMLAttributes } from "react";

const variantClasses: Record<string, string> = {
  primary: "bg-slate-900 text-white hover:bg-slate-700",
  secondary: "text-slate-900 ring-1 ring-slate-200 hover:bg-slate-100",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
