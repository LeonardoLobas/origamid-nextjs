import React, { use } from "react";
import { serverGet } from "./components/server-fetch";

export interface IProdutos {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    estoque: number;
    importado: number;
}

export default function HomePage() {
    const produtos = use(serverGet());

    return (
        <div>
            <h1>Produtos</h1>
            <ul>
                {produtos.map((produto) => (
                    <li key={produto.id}>{produto.nome}</li>
                ))}
            </ul>
        </div>
    );
}
