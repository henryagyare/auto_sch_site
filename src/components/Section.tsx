type Variant = "light" | "dark" | "white" | "alt";

const variantStyles: Record<Variant, string> = {
  light: "bg-[#FAF8F4] text-[#1C1C2E]",
  alt:   "bg-[#F3EDE3] text-[#1C1C2E]",
  white: "bg-white text-[#1C1C2E]",
  dark:  "bg-[#0E2148] text-white",
};

export default function Section({
  children,
  className = "",
  variant = "light",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
}) {
  return (
    <section className={`${variantStyles[variant]} ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        {children}
      </div>
    </section>
  );
}
