"use client";

import { useMemo, useState } from "react";
import { domos } from "@/lib/domos";

const whatsappNumber = "554891971032";

const buildWa = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export default function BookingPrecheck() {
  const [domo, setDomo] = useState(domos[0]?.name ?? "Domo One");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("2");

  const link = useMemo(() => {
    const text = [
      "Olá! Vim pelo site e quero verificar disponibilidade.",
      `Domo: ${domo}`,
      `Check-in: ${checkin || "a confirmar"}`,
      `Check-out: ${checkout || "a confirmar"}`,
      `Hóspedes: ${guests}`,
    ].join("\n");

    return buildWa(text);
  }, [domo, checkin, checkout, guests]);

  return (
    <div className="card-glass p-6 md:p-8">
      <p className="text-xs tracking-[0.18em] uppercase text-[var(--accent)]">Pré-check de disponibilidade</p>
      <h3 className="mt-2 text-4xl">Consulta rápida sem formulário longo</h3>
      <p className="mt-2 text-sm text-[var(--secondary)]">
        Preencha os dados básicos e abra o WhatsApp já com a mensagem pronta.
      </p>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        <label className="text-sm text-[var(--secondary)]">
          Domo
          <select
            value={domo}
            onChange={(e) => setDomo(e.target.value)}
            className="mt-1 w-full rounded-xl border border-[var(--border)] bg-white px-3 py-2 text-sm text-[var(--foreground)]"
          >
            {domos.map((item) => (
              <option key={item.slug} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm text-[var(--secondary)]">
          Hóspedes
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="mt-1 w-full rounded-xl border border-[var(--border)] bg-white px-3 py-2 text-sm text-[var(--foreground)]"
          >
            <option value="1">1 pessoa</option>
            <option value="2">2 pessoas</option>
            <option value="3">3 pessoas</option>
            <option value="4">4 pessoas</option>
          </select>
        </label>

        <label className="text-sm text-[var(--secondary)]">
          Check-in
          <input
            type="date"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            className="mt-1 w-full rounded-xl border border-[var(--border)] bg-white px-3 py-2 text-sm text-[var(--foreground)]"
          />
        </label>

        <label className="text-sm text-[var(--secondary)]">
          Check-out
          <input
            type="date"
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            className="mt-1 w-full rounded-xl border border-[var(--border)] bg-white px-3 py-2 text-sm text-[var(--foreground)]"
          />
        </label>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="primary-btn mt-6 w-full !bg-[#25D366] hover:!bg-[#20bb58]"
      >
        Consultar disponibilidade no WhatsApp
      </a>
    </div>
  );
}
