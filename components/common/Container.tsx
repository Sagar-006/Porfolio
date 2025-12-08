export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full font-hanken mx-auto max-w-3xl px-4 animate-fade-in-blur ${className}`}
    >
      {children}
    </div>
  );
}
