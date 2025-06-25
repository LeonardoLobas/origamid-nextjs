interface PageParams {
    params: {
        curso: string;
    };
}

export default function CursosPage({ params }: PageParams) {
    return (
        <div>
            <h1>Cursos especifico: {params.curso}</h1>
        </div>
    );
}
