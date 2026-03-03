import { useState } from "react";

export default function CapoeiraButton() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);

    // volta para imagem inicial após 1 segundo
    setTimeout(() => {
      setActive(false);
    }, 1000);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: 0,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "200px",
          height: "200px",
        }}
      >
        {/* Imagem base */}
        <img
          src="/images/base.png"
          style={{
            position: "absolute",
            width: "100%",
            transition: "opacity 0.4s ease",
            opacity: active ? 0 : 1,
          }}
        />

        {/* Imagem do golpe */}
        <img
          src="/images/halfmoon.png"
          style={{
            position: "absolute",
            width: "100%",
            transition: "opacity 0.4s ease",
            opacity: active ? 1 : 0,
          }}
        />
      </div>
    </button>
  );
}