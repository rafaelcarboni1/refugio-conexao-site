"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import BookingPrecheck from "@/components/booking-precheck";

type AvailabilityModalTriggerProps = {
  label: string;
  className?: string;
  initialDomoSlug?: string;
};

export default function AvailabilityModalTrigger({
  label,
  className,
  initialDomoSlug,
}: AvailabilityModalTriggerProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const closeModal = () => setOpen(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onEsc);

    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  const modal =
    mounted && open
      ? createPortal(
          <div
            className="fixed inset-0 z-[200] flex items-end justify-center bg-black/60 p-2 backdrop-blur-[2px] sm:items-center sm:p-4"
            role="dialog"
            aria-modal="true"
            onClick={(event) => {
              if (event.target === event.currentTarget) closeModal();
            }}
          >
            <div
              className="relative max-h-[90dvh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/25 bg-[var(--background)] p-3 shadow-2xl sm:rounded-3xl sm:p-4"
            >
              <button
                type="button"
                onClick={closeModal}
                aria-label="Fechar"
                className="absolute top-3 right-3 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white/95 text-lg leading-none text-black/70 hover:bg-white hover:text-black"
              >
                ×
              </button>

              <BookingPrecheck
                initialDomoSlug={initialDomoSlug}
                lockDomo={!!initialDomoSlug}
                title="Consultar disponibilidade online"
                subtitle="Verifique agora as datas livres no calendário principal (Airbnb iCal)."
              />
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          setOpen(true);
        }}
        className={className}
      >
        {label}
      </button>
      {modal}
    </>
  );
}
