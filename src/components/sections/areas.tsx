import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const areas = [
    {
        title: "Societário & M&A",
        description: "Estruturação de negócios, fusões, aquisições e resolução de conflitos societários.",
        href: "/atuacao#societario",
    },
    {
        title: "Contratos Empresariais",
        description: "Segurança jurídica e previsibilidade em relações comerciais complexas.",
        href: "/atuacao#contratos",
    },
    {
        title: "Trabalhista Estratégico",
        description: "Gestão de passivo e consultoria preventiva para reduzir riscos.",
        href: "/atuacao#trabalhista",
    },
    {
        title: "Tributário Consultivo",
        description: "Planejamento fiscal e otimização de carga tributária com segurança.",
        href: "/atuacao#tributario",
    },
    {
        title: "Contencioso Estratégico",
        description: "Atuação em disputas de alta complexidade e valor agregado.",
        href: "/atuacao#contencioso",
    },
    {
        title: "Patrimonial & Sucessão",
        description: "Proteção de ativos e planejamento sucessório para famílias empresárias.",
        href: "/atuacao#patrimonial",
    },
]

export function AreasSection() {
    return (
        <section id="areas" className="py-24 bg-neutral-50">
            <div className="container-custom">
                <div className="max-w-xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif mb-6 text-neutral-900">
                        Áreas de Atuação
                    </h2>
                    <p className="text-lg text-neutral-600 leading-relaxed">
                        Foco em soluções jurídicas que geram valor e protegem o negócio.
                        Atuamos onde a complexidade exige senioridade.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {areas.map((area, index) => (
                        <Link
                            key={index}
                            href={area.href}
                            className="group relative bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-200 transition-all duration-300 flex flex-col justify-between h-full"
                        >
                            <div>
                                <h3 className="text-xl font-serif font-medium text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors">
                                    {area.title}
                                </h3>
                                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                                    {area.description}
                                </p>
                            </div>
                            <div className="flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-800">
                                Ver detalhes
                                <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
