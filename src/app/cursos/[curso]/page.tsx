import { getCursoId } from "@/api/api";
import Link from "next/link";
import { use } from "react";

interface PageParams {
    params: {
        curso: string;
    };
}

export default function CursosPage({ params }: PageParams) {
    const curso = use(getCursoId(params.curso));
    return (
        <div>
            <h1>{curso.nome}</h1>
            <p>{curso.descricao}</p>
            <p>Total horas:{curso.total_horas}</p>
            <p>Total aulas:{curso.total_aulas}</p>
            <ul>
                {curso.aulas.map((aula) => (
                    <li key={aula.id}>
                        <Link href={`/cursos/${params.curso}/${aula.slug}`}>
                            {aula.nome}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
