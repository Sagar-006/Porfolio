export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full font-hanken mx-auto max-w-4xl px-2 animate-fade-in-blur ${className}`}
    >
      {children}
    </div>
  );
}
