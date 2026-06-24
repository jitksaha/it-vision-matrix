export function GridBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 grid-bg radial-fade opacity-70" />
      <div
        className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, oklch(0.7 0.18 250 / 0.35), transparent 60%), radial-gradient(circle at 70% 60%, oklch(0.68 0.21 295 / 0.3), transparent 60%)",
        }}
      />
    </div>
  );
}
