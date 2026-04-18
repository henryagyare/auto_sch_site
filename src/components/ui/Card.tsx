type CardTheme = "light" | "dark";

const themeClasses: Record<CardTheme, string> = {
  light: "bg-white text-black",
  dark: "bg-[#1a1a1a] text-white",
};

export default function Card({
  children,
  className = "",
  theme = "light",
}: {
  children: React.ReactNode;
  className?: string;
  theme?: CardTheme;
}) {
  return (
    <div
      className={`rounded-[2px] p-6 shadow-[rgba(0,0,0,0.3)_0px_0px_5px_0px] ${themeClasses[theme]} ${className}`}
    >
      {children}
    </div>
  );
}
