export default function SectionHeading({
  title,
  description,
  label,
  light = false,
  centered = false,
}: {
  title: string;
  description?: string;
  label?: string;
  light?: boolean;
  centered?: boolean;
}) {
  return (
    <div className={`mb-10 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {label && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C9922A]">
          {label}
        </p>
      )}
      <h2
        className={`text-4xl font-bold leading-snug ${
          light ? "text-white" : "text-[#1C1C2E]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-[#94A3C8]" : "text-[#6B7280]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
