import axios from "axios";

export interface ICurso {
    id: number;
    slug: string;
    nome: string;
    descricao: string;
    total_aulas: number;
    total_horas: number;
    aulas: IAula[];
}

export interface IAula {
    id: number;
    slug: string;
    nome: string;
    descricao: string;
    tempo: number;
    curso_id: number;
    ordem: number;
}

export async function getCursos(): Promise<ICurso[]> {
    try {
        const response = await axios.get<ICurso[]>(
            "https://api.origamid.online/cursos"
        );
        return response.data;
    } catch (err) {
        console.error("Erro ao buscar cursos:", err);
        throw new Error("Erro ao buscar cursos");
    }
}
export async function getCursoId(curso: string): Promise<ICurso> {
    try {
        const response = await axios.get<ICurso>(
            `https://api.origamid.online/cursos/${curso}`
        );
        return response.data;
    } catch (err) {
        console.error("Erro ao buscar cursos:", err);
        throw new Error("Erro ao buscar cursos");
    }
}
export async function getAulaId(curso: string, aula: string): Promise<IAula> {
    try {
        const response = await axios.get<IAula>(
            `https://api.origamid.online/cursos/${curso}/${aula}`
        );
        return response.data;
    } catch (err) {
        console.error("Erro ao buscar cursos:", err);
        throw new Error("Erro ao buscar cursos");
    }
}
