import { getCursos } from "@/api/api";
import { use } from "react";

export default function CursosPage() {
    const cursos = use(getCursos());
    return (
        <div>
            <h1>Cursos</h1>
            <ul>
                {cursos.map((item) => (
                    <li key={item.id}>{item.nome}</li>
                ))}
            </ul>
        </div>
    );
}
