import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const areas = [
    {
        id: "societario",
        title: "Societário & M&A",
        description: "Estruturação de negócios, fusões, aquisições e resolução de conflitos societários.",
        details: [
            "Constituição e estruturação de sociedades (SA, Ltda)",
            "Acordo de sócios e governança corporativa",
            "Auditoria legal (Due Diligence)",
            "Operações de M&A (Buy-side e Sell-side)",
            "Resolução de conflitos societários e apuração de haveres"
        ]
    },
    {
        id: "contratos",
        title: "Contratos Empresariais",
        description: "Segurança jurídica e previsibilidade em relações comerciais complexas.",
        details: [
            "Elaboração e revisão de contratos estratégicos",
            "Contratos de distribuição, franquia e representação",
            "Memorandos de entendimento (MoU) e cartas de intenção",
            "Gestão de contratos e pareceres de risco",
            "Negociação de cláusulas complexas e garantias"
        ]
    },
    {
        id: "trabalhista",
        title: "Trabalhista Estratégico",
        description: "Gestão de passivo e consultoria preventiva para reduzir riscos.",
        details: [
            "Consultoria preventiva e compliance trabalhista",
            "Planos de remuneração variável e stock options",
            "Negociação sindical e coletiva",
            "Defesa em ações civis públicas e inquéritos do MPT",
            "Auditoria trabalhista em operações de M&A"
        ]
    },
    {
        id: "tributario",
        title: "Tributário Consultivo",
        description: "Planejamento fiscal e otimização de carga tributária com segurança.",
        details: [
            "Planejamento tributário nacional e internacional",
            "Consultas formais à Receita Federal e Secretarias de Fazenda",
            "Revisão de procedimentos fiscais e recuperação de créditos",
            "Incentivos fiscais e regimes especiais",
            "Defesa administrativa de autos de infração"
        ]
    },
    {
        id: "contencioso",
        title: "Contencioso Estratégico",
        description: "Atuação em disputas de alta complexidade e valor agregado.",
        details: [
            "Ações judiciais de alta complexidade (Cível e Empresarial)",
            "Arbitragem nacional e internacional",
            "Execução de títulos e recuperação de crédito",
            "Gestão de crise e tutela de urgência",
            "Atuação nos Tribunais Superiores (STJ e STF)"
        ]
    },
    {
        id: "patrimonial",
        title: "Patrimonial & Sucessão",
        description: "Proteção de ativos e planejamento sucessório para famílias empresárias.",
        details: [
            "Planejamento sucessório e testamentos",
            "Constituição de holdings patrimoniais e familiares",
            "Protocolos familiares e governança familiar",
            "Estruturas de proteção patrimonial (offshore, fundos)",
            "Inventários judiciais e extrajudiciais"
        ]
    },
]

export default function AreasPage() {
    return (
        <div className="min-h-screen bg-neutral-50 py-24">
            <div className="container-custom">
                <div className="mb-12">
                    <Button asChild variant="ghost" className="-ml-4 mb-6 text-neutral-500 hover:text-neutral-900">
                        <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Voltar</Link>
                    </Button>
                    <h1 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">Áreas de Atuação</h1>
                    <p className="text-lg text-neutral-600 max-w-2xl">
                        Nossa expertise abrange os principais pilares do direito empresarial, sempre com foco em resultados práticos e segurança jurídica.
                    </p>
                </div>

                <div className="space-y-16">
                    {areas.map((area) => (
                        <div key={area.id} id={area.id} className="scroll-mt-28 bg-white rounded-2xl p-8 md:p-12 border border-neutral-200 shadow-sm">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                                <div className="md:col-span-1">
                                    <h2 className="text-2xl md:text-3xl font-serif text-neutral-900 mb-4">{area.title}</h2>
                                    <p className="text-neutral-600 leading-relaxed mb-6">{area.description}</p>
                                    <div className="h-1 w-20 bg-primary-600 rounded-full"></div>
                                </div>
                                <div className="md:col-span-2">
                                    <h3 className="font-medium text-neutral-900 mb-6 uppercase tracking-wider text-sm">O que fazemos</h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {area.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="h-1.5 w-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                                                <span className="text-neutral-600 text-sm leading-relaxed">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <h3 className="text-2xl font-serif mb-6">Precisa de suporte em outra área?</h3>
                    <Button asChild size="lg">
                        <Link href="/contato">Fale conosco</Link>
                    </Button>
                </div>

            </div>
        </div>
    )
}
