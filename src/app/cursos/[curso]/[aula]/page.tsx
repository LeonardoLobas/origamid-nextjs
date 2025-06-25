interface PageParams {
    params: {
        curso: string;
        aula: string;
    };
}

export default function AulaPage({ params }: PageParams) {
    return (
        <div>
            <h1>
                Aula: {params.curso} / {params.aula}
            </h1>
        </div>
    );
}
