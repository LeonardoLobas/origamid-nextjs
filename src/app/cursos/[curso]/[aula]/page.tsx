import { getAulaId } from "@/api/api";
import { use } from "react";

interface PageParams {
    params: {
        curso: string;
        aula: string;
    };
}

export default function AulaPage({ params }: PageParams) {
    const aula = use(getAulaId(params.curso, params.aula));
    return (
        <div>
            <h1>{aula.nome}</h1>
            <p>{aula.descricao}</p>
            <p>Tempo: {aula.tempo}</p>
        </div>
    );
}
