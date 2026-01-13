import Link from "next/link"
import { ArrowRight } from "lucide-react"

const articles = [
    {
        category: "Contratos",
        title: "Riscos ocultos em contratos de prestação de serviços de longo prazo",
        excerpt: "Como identificar e mitigar cláusulas que podem inviabilizar a operação em cenários de crise.",
        date: "12 jan 2024",
        href: "/conteudos/riscos-ocultos-contratos",
    },
    {
        category: "Societário",
        title: "Cláusulas essenciais em acordo de sócios para startups e scale-ups",
        excerpt: "Tag-along, drag-along e shot-gun: quando e como aplicar para proteger os fundadores.",
        date: "05 jan 2024",
        href: "/conteudos/acordo-de-socios",
    },
    {
        category: "Governança",
        title: "Como estruturar governança mínima em empresa familiar",
        excerpt: "Passos práticos para profissionalizar a gestão sem perder a agilidade do negócio.",
        date: "28 dez 2023",
        href: "/conteudos/governanca-empresa-familiar",
    },
]

export function InsightsSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-serif mb-6 text-neutral-900">
                            Insights & Conteúdo
                        </h2>
                        <p className="text-lg text-neutral-600">
                            Análise jurídica aplicada aos negócios.
                        </p>
                    </div>
                    <Link
                        href="/conteudos"
                        className="group flex items-center text-sm font-medium text-neutral-900 border-b border-neutral-900 pb-1 hover:text-primary-700 hover:border-primary-700 transition-colors"
                    >
                        Ver todos os artigos
                        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <Link key={index} href={article.href} className="group block">
                            <div className="mb-4 text-xs font-bold tracking-wider text-primary-600 uppercase">
                                {article.category}
                            </div>
                            <h3 className="text-xl font-serif font-medium text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors">
                                {article.title}
                            </h3>
                            <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                                {article.excerpt}
                            </p>
                            <div className="text-xs text-neutral-400">
                                {article.date}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
