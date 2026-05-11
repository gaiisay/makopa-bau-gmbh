import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const alt = siteConfig.ogImageAlt;

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
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "linear-gradient(135deg, #1A3A63 0%, #224B7A 55%, #0F1E33 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: 9999,
                backgroundColor: "#0097A7",
              }}
            />
            Makopa Bau GmbH
          </div>
          <div
            style={{
              fontSize: 24,
              color: "rgba(255,255,255,0.82)",
            }}
          >
            www.makopa.de
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: "900px",
            }}
          >
            Bauen mit Zukunft.
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#8DE3E8",
              fontWeight: 600,
            }}
          >
            Baustellenmanagement • Erdarbeiten • Pflasterarbeiten • Abbruch
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "18px",
            flexWrap: "wrap",
          }}
        >
          {[
            "Erdarbeiten",
            "Pflasterarbeiten",
            "Pflanzarbeiten",
            "Baustellenlogistik",
            "Abbruch",
            "Vermietung",
          ].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 18px",
                borderRadius: 9999,
                border: "1px solid rgba(255,255,255,0.18)",
                backgroundColor: "rgba(255,255,255,0.06)",
                fontSize: 24,
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}