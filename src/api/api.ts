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

interface IAcao {
    id: number;
    preco_anterior: number;
    preco: number;
    simbolo: string;
    nome: string;
    descricao: string;
    vendas: number;
    atualizada: string;
}

export async function getCursos(): Promise<ICurso[]> {
    try {
        const response = await axios.get<ICurso[]>("https://api.origamid.online/cursos");
        return response.data;
    } catch (err) {
        console.error("Erro ao buscar cursos:", err);
        throw new Error("Erro ao buscar cursos");
    }
}
export async function getCursoId(curso: string): Promise<ICurso> {
    try {
        const response = await axios.get<ICurso>(`https://api.origamid.online/cursos/${curso}`);
        return response.data;
    } catch (err) {
        console.error("Erro ao buscar cursos:", err);
        throw new Error("Erro ao buscar cursos");
    }
}
export async function getAulaId(curso: string, aula: string): Promise<IAula> {
    try {
        const response = await axios.get<IAula>(`https://api.origamid.online/cursos/${curso}/${aula}`);
        return response.data;
    } catch (err) {
        console.error("Erro ao buscar cursos:", err);
        throw new Error("Erro ao buscar cursos");
    }
}

export async function getAcao(): Promise<IAcao> {
    try {
        const response = await fetch("https://api.origamid.online/acoes/lua", { next: { revalidate: 5 } });
        if (!response.ok) throw new Error("Erro ao buscar ação");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error("Erro ao buscar ação");
    }
}
