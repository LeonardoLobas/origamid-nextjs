import { getCursos } from "@/api/api";
import Link from "next/link";
import { use } from "react";

export default function CursosPage() {
    const cursos = use(getCursos());
    return (
        <div>
            <h1>Cursos</h1>
            <ul>
                {cursos.map((curso) => (
                    <li key={curso.id}>
                        {" "}
                        <Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
