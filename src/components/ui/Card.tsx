type CardTheme = "light" | "dark";

const themeClasses: Record<CardTheme, string> = {
  light: "bg-white text-[#1C1C2E] shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-[#DDD4C5]",
  dark:  "bg-[#162B52] text-white border border-[#2A3F6A]",
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
    <div className={`rounded-xl p-6 ${themeClasses[theme]} ${className}`}>
      {children}
    </div>
  );
}
