"use client";

import { useMemo, useState } from "react";
import { domos } from "@/lib/domos";

const whatsappNumber = "554891971032";

const buildWa = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

type AvailabilityStatus = "idle" | "loading" | "available" | "unavailable" | "error";
type DateSuggestion = { checkin: string; checkout: string };

export default function BookingPrecheck() {
  const [domoSlug, setDomoSlug] = useState(domos[0]?.slug ?? "domo-one");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("2");
  const [status, setStatus] = useState<AvailabilityStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [suggestions, setSuggestions] = useState<DateSuggestion[]>([]);

  const selectedDomo = domos.find((item) => item.slug === domoSlug) ?? domos[0];

  const canCheck = !!checkin && !!checkout;

  const waMessage = useMemo(() => {
    const lines = [
      "Olá! Vim pelo site e quero finalizar minha reserva.",
      `Domo: ${selectedDomo.name}`,
      `Check-in: ${checkin || "a confirmar"}`,
      `Check-out: ${checkout || "a confirmar"}`,
      `Hóspedes: ${guests}`,
    ];

    if (status === "available") {
      lines.push("Disponibilidade online consultada no calendário principal (Airbnb iCal). ✅");
    }

    return lines.join("\n");
  }, [selectedDomo.name, checkin, checkout, guests, status]);

  const waLink = useMemo(() => buildWa(waMessage), [waMessage]);

  const checkAvailability = async () => {
    if (!canCheck) return;

    setStatus("loading");
    setStatusMessage("Consultando calendário do Airbnb...");
    setSuggestions([]);

    try {
      const response = await fetch(
        `/api/availability?domo=${encodeURIComponent(domoSlug)}&checkin=${encodeURIComponent(
          checkin,
        )}&checkout=${encodeURIComponent(checkout)}`,
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Falha ao consultar disponibilidade");
      }

      if (data.available) {
        setStatus("available");
        setStatusMessage("Disponível nas datas selecionadas ✅");
        setSuggestions([]);
      } else {
        setStatus("unavailable");
        setStatusMessage("Indisponível nessas datas no calendário atual.");
        setSuggestions(Array.isArray(data.suggestions) ? data.suggestions : []);
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Não foi possível consultar disponibilidade agora.",
      );
      setSuggestions([]);
    }
  };

  return (
    <div className="card-glass p-6 md:p-8">
      <p className="text-xs tracking-[0.18em] uppercase text-[var(--accent)]">Pré-check de disponibilidade</p>
      <h3 className="mt-2 text-4xl">Consulta online em tempo real</h3>
      <p className="mt-2 text-sm text-[var(--secondary)]">
        Consulta direta no calendário principal do Airbnb (iCal) antes de abrir o WhatsApp.
      </p>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        <label className="text-sm text-[var(--secondary)]">
          Domo
          <select
            value={domoSlug}
            onChange={(e) => {
              setDomoSlug(e.target.value);
              setStatus("idle");
              setStatusMessage("");
              setSuggestions([]);
            }}
            className="mt-1 w-full rounded-xl border border-[var(--border)] bg-white px-3 py-2 text-sm text-[var(--foreground)]"
          >
            {domos.map((item) => (
              <option key={item.slug} value={item.slug}>
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
            onChange={(e) => {
              setCheckin(e.target.value);
              setStatus("idle");
              setStatusMessage("");
              setSuggestions([]);
            }}
            className="mt-1 w-full rounded-xl border border-[var(--border)] bg-white px-3 py-2 text-sm text-[var(--foreground)]"
          />
        </label>

        <label className="text-sm text-[var(--secondary)]">
          Check-out
          <input
            type="date"
            value={checkout}
            onChange={(e) => {
              setCheckout(e.target.value);
              setStatus("idle");
              setStatusMessage("");
              setSuggestions([]);
            }}
            className="mt-1 w-full rounded-xl border border-[var(--border)] bg-white px-3 py-2 text-sm text-[var(--foreground)]"
          />
        </label>
      </div>

      <button
        type="button"
        onClick={checkAvailability}
        disabled={!canCheck || status === "loading"}
        className="secondary-btn mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Consultando calendário..." : "Consultar disponibilidade online"}
      </button>

      {statusMessage && (
        <p
          className={`mt-3 rounded-xl px-3 py-2 text-sm ${
            status === "available"
              ? "bg-green-100 text-green-700"
              : status === "unavailable"
                ? "bg-amber-100 text-amber-800"
                : status === "error"
                  ? "bg-red-100 text-red-700"
                  : "bg-white text-[var(--secondary)]"
          }`}
        >
          {statusMessage}
        </p>
      )}

      {status === "unavailable" && suggestions.length > 0 && (
        <div className="mt-3 rounded-xl border border-[var(--border)] bg-white p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
            Próximas datas sugeridas
          </p>
          <div className="mt-2 grid gap-2">
            {suggestions.map((item) => (
              <button
                key={`${item.checkin}-${item.checkout}`}
                type="button"
                onClick={() => {
                  setCheckin(item.checkin);
                  setCheckout(item.checkout);
                  setStatus("idle");
                  setStatusMessage("Datas sugeridas aplicadas. Clique em consultar novamente.");
                }}
                className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-left text-sm text-[var(--foreground)] hover:border-[var(--accent)]"
              >
                {item.checkin} → {item.checkout}
              </button>
            ))}
          </div>
        </div>
      )}

      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="primary-btn mt-4 w-full !bg-[#25D366] hover:!bg-[#20bb58]"
      >
        Continuar no WhatsApp
      </a>
    </div>
  );
}
