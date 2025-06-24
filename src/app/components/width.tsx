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
      <h2 className={ativo ? "text-green-600" : "text-red-600"}>
        Largura da tela:{width}
      </h2>
      <button onClick={() => setAtivo((b) => !b)}>Ativar</button>
    </div>
  );
}
