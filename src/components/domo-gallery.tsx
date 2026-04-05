"use client";

import { useEffect, useMemo, useState } from "react";

type DomoGalleryProps = {
  images: string[];
  domoName: string;
};

export default function DomoGallery({ images, domoName }: DomoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  const total = images.length;

  const safeIndex = useMemo(() => {
    if (activeIndex < 0) return 0;
    if (activeIndex >= total) return total - 1;
    return activeIndex;
  }, [activeIndex, total]);

  const openAt = (index: number) => {
    setActiveIndex(index);
    setZoom(1);
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
    setZoom(1);
  };

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % total);
    setZoom(1);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
    setZoom(1);
  };

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "+" || event.key === "=") {
        setZoom((z) => Math.min(z + 0.25, 3));
      }
      if (event.key === "-") {
        setZoom((z) => Math.max(z - 0.25, 1));
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, total]);

  return (
    <>
      <div className="relative">
        <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.15em] text-[var(--secondary)]">
          <span>Deslize para o lado</span>
          <span>{total} fotos</span>
        </div>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:thin]">
          {images.map((img, index) => (
            <figure
              key={img}
              className="group relative min-w-[82vw] snap-start overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm sm:min-w-[66vw] lg:min-w-[520px]"
            >
              <button
                type="button"
                onClick={() => openAt(index)}
                className="block w-full"
                aria-label={`Abrir foto ${index + 1} do ${domoName}`}
              >
                <img
                  src={img}
                  alt={`Foto ${index + 1} do ${domoName}`}
                  className="h-[320px] w-full object-cover md:h-[420px]"
                />
              </button>

              <div className="absolute top-3 right-3 rounded-full border border-white/30 bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                Clique para ampliar
              </div>

              <figcaption className="px-3 py-2 text-xs text-[var(--secondary)]">
                {domoName} • Foto {index + 1}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 p-4 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
        >
          <div className="mx-auto flex h-full w-full max-w-6xl flex-col">
            <div className="mb-3 flex items-center justify-between text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-white/80">
                {domoName} • {safeIndex + 1}/{total}
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setZoom((z) => Math.max(z - 0.25, 1))}
                  className="rounded-full border border-white/30 bg-white/10 px-3 py-2 text-sm hover:bg-white/20"
                >
                  −
                </button>
                <button
                  type="button"
                  onClick={() => setZoom((z) => Math.min(z + 0.25, 3))}
                  className="rounded-full border border-white/30 bg-white/10 px-3 py-2 text-sm hover:bg-white/20"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={close}
                  className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] hover:bg-white/20"
                >
                  Fechar
                </button>
              </div>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-black/40">
              <img
                src={images[safeIndex]}
                alt={`Foto ${safeIndex + 1} do ${domoName}`}
                className="max-h-full max-w-full object-contain transition-transform duration-200"
                style={{ transform: `scale(${zoom})` }}
              />

              <button
                type="button"
                onClick={prev}
                className="absolute left-3 rounded-full border border-white/30 bg-black/55 px-4 py-3 text-white hover:bg-black/75"
                aria-label="Foto anterior"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-3 rounded-full border border-white/30 bg-black/55 px-4 py-3 text-white hover:bg-black/75"
                aria-label="Próxima foto"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
