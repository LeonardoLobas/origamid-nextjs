"use client";

import React from "react";

export default function Width() {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const handleRezise = () => {
      setWidth(document.documentElement.clientWidth);
    };
    handleRezise();
    window.addEventListener("resize", handleRezise);
    return () => {
      window.removeEventListener("resize", handleRezise);
    };
  }, []);

  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      <h2 style={{ color: ativo ? "#680" : "#b00" }}>
        Largura da tela:{width}
      </h2>
      <button onClick={() => setAtivo((b) => !b)}>Ativar</button>
    </div>
  );
}
