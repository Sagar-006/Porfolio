export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-full font-hanken  animate-fade-in-blur ${className}`}
    >
      {children}
    </div>
  );
}
