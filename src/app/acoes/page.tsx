import { getAcao } from "@/api/api";
import { use } from "react";

export default function AcoesPage() {
    const acao = use(getAcao());

    return (
        <main>
            <h1>{acao.simbolo}</h1>
            <h2>{acao.atualizada}</h2>
        </main>
    );
}
