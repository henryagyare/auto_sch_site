type Variant = "light" | "dark";

const variantStyles: Record<Variant, string> = {
  light: "bg-white text-black",
  dark: "bg-black text-white",
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
      <div className="mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {children}
      </div>
    </section>
  );
}
