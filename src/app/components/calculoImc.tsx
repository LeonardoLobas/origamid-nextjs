"use client";
import React from "react";

const CalculoImc = () => {
    const [altura, setAltura] = React.useState("");
    const [peso, setPeso] = React.useState("");
    const [resultado, setResultado] = React.useState<number | null>(null);

    function calcular() {
        const imc =
            (parseFloat(peso) / parseFloat(altura)) * parseFloat(altura);
        setResultado(imc);
    }

    return (
        <div>
            <label htmlFor="altura">Altura</label>
            <input
                type="text"
                id="altura"
                name="altura"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
            />
            <label htmlFor="peso">Peso</label>
            <input
                type="text"
                id="peso"
                name="peso"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
            />
            <button onClick={calcular}>calcular</button>

            <h1>{resultado}</h1>
        </div>
    );
};

export default CalculoImc;
