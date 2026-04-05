"use client";

import { useEffect, useState } from "react";
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

  const closeModal = () => setOpen(false);

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

  return (
    <>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          setOpen(true);
        }}
        className={className}
      >
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onMouseDown={closeModal}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/20 bg-[var(--background)] p-3 shadow-2xl md:p-4"
            onMouseDown={(event) => event.stopPropagation()}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Fechar"
              className="absolute top-3 left-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-black/20 bg-black text-2xl font-semibold leading-none text-white shadow-lg hover:bg-black/85"
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
        </div>
      )}
    </>
  );
}
