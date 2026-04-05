import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Refúgio Conexão | Domos premium em Praia Grande-SC";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          fontFamily: "Georgia, serif",
          background:
            "radial-gradient(circle at 15% 20%, rgba(242,201,135,0.32), transparent 35%), radial-gradient(circle at 85% 15%, rgba(255,255,255,0.12), transparent 28%), linear-gradient(145deg, #161310 0%, #2a231d 45%, #3c3128 100%)",
          color: "#fff",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.45) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 64px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "10px 18px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.4)",
              color: "#f2c987",
              fontSize: 24,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Refúgio Conexão • Praia Grande/SC
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 900 }}>
            <div style={{ fontSize: 88, lineHeight: 1.02, fontWeight: 700 }}>
              Domos premium
              <br />
              na Capital dos Cânions
            </div>
            <div
              style={{
                fontSize: 36,
                fontFamily: "Arial, sans-serif",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Reserva rápida no WhatsApp • Experiência exclusiva em meio à natureza
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
