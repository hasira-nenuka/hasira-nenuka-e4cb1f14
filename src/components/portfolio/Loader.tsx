import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity">
      <div className="flex flex-col items-center gap-4">
        <div className="relative size-14">
          <div className="absolute inset-0 rounded-full border-2 border-[var(--brand)]/30" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[var(--brand)] border-r-[var(--brand-2)] animate-spin" />
        </div>
        <p className="text-sm tracking-widest uppercase gradient-text font-semibold">Loading</p>
      </div>
    </div>
  );
}
