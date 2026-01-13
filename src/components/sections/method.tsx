import { Search, Compass, Cog, Settings } from "lucide-react"

const steps = [
    {
        number: "01",
        title: "Diagnóstico e mapa de risco",
        description: "Análise profunda do cenário para identificar vulnerabilidades e oportunidades ocultas.",
        icon: Search,
    },
    {
        number: "02",
        title: "Estratégia e plano de ação",
        description: "Desenho de soluções jurídicas alinhadas aos objetivos de negócio, com cronograma claro.",
        icon: Compass,
    },
    {
        number: "03",
        title: "Execução e negociação",
        description: "Atuação técnica precisa e representação firme em mesas de negociação.",
        icon: Cog,
    },
    {
        number: "04",
        title: "Monitoramento e governança",
        description: "Acompanhamento contínuo para garantir a perenidade dos resultados.",
        icon: Settings,
    },
]

export function MethodSection() {
    return (
        <section className="py-24 bg-neutral-900 text-neutral-50 overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-serif mb-6">
                            Como atuamos
                        </h2>
                        <p className="text-lg text-neutral-400 leading-relaxed">
                            Nosso processo garante previsibilidade e controle.
                            Aconselhamento jurídico orientado a decisão: impacto, custo, prazo e risco.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting line (desktop only) */}
                    <div className="absolute top-12 left-0 w-full h-px bg-neutral-800 hidden lg:block" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 group">
                            <div className="w-24 h-24 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center mb-6 group-hover:border-primary-700 group-hover:bg-neutral-800 transition-all duration-300">
                                <step.icon className="h-8 w-8 text-neutral-500 group-hover:text-primary-400 transition-colors" />
                            </div>
                            <div className="text-5xl font-serif text-neutral-800 font-bold absolute -top-4 right-4 opacity-20 pointer-events-none select-none">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-medium mb-3 text-neutral-200 group-hover:text-primary-400 transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-neutral-500 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
