import { Button } from "@/components/ui/button"
import Link from "next/link"

const cases = [
    {
        context: "Varejo em Expansão",
        challenge: "Contratos travando escala nacional",
        action: "Revisão completa + novo modelo contratual + negociação com fornecedores",
        impact: "Redução de risco e aumento de 30% na velocidade de fechamento",
    },
    {
        context: "Tech & Inovação",
        challenge: "Disputa societária entre founders",
        action: "Mediação estratégica e reestruturação do acordo de sócios",
        impact: "Retomada da governança e destravamento de rodada de investimento",
    },
    {
        context: "Indústria Familiar",
        challenge: "Sucessão patrimonial complexa",
        action: "Planejamento sucessório e criação de holding patrimonial",
        impact: "Proteção de ativos e economia tributária de longo prazo",
    },
]

export function CasesSection() {
    return (
        <section className="py-24 bg-neutral-50 border-t border-neutral-200">
            <div className="container-custom">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif mb-6 text-neutral-900">
                        Casos e Situações
                    </h2>
                    <p className="text-lg text-neutral-600">
                        Experiência comprovada em momentos decisivos.
                        Preservamos a confidencialidade de nossos clientes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-xs font-bold tracking-wider text-primary-600 uppercase mb-4">
                                {item.context}
                            </div>
                            <div className="mb-6">
                                <h4 className="font-serif text-lg font-medium text-neutral-900 mb-2">Desafio</h4>
                                <p className="text-neutral-600 text-sm">{item.challenge}</p>
                            </div>
                            <div className="mb-6">
                                <h4 className="font-serif text-lg font-medium text-neutral-900 mb-2">Atuação</h4>
                                <p className="text-neutral-600 text-sm">{item.action}</p>
                            </div>
                            <div>
                                <h4 className="font-serif text-lg font-medium text-neutral-900 mb-2">Impacto</h4>
                                <p className="text-neutral-800 text-sm font-medium bg-neutral-100 p-3 rounded-md border border-neutral-200 border-l-4 border-l-primary-600">
                                    {item.impact}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button asChild variant="outline">
                        <Link href="/contato?assunto=caso">Discutir meu caso (Confidencial)</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
