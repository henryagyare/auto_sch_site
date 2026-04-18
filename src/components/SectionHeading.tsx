export default function SectionHeading({
  title,
  description,
  label,
  light = false,
}: {
  title: string;
  description?: string;
  label?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      {label && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#76b900]">
          {label}
        </p>
      )}
      <h2
        className={`text-[24px] font-bold leading-[1.25] sm:text-[36px] ${
          light ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-[1.67] ${
            light ? "text-[#a7a7a7]" : "text-[#757575]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
