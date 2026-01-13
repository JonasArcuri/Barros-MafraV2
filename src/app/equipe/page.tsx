import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"

const partners = [
    {
        name: "Carlos Barros",
        role: "Sócio Fundador",
        areas: ["Societário", "M&A", "Estratégia"],
        bio: "Com mais de 20 anos de experiência em fusões e aquisições complexas, liderou transações que somam mais de R$ 5 bilhões. Foi sócio de grandes bancas antes de fundar o escritório para oferecer atendimento sênior e personalizado.",
        education: [
            "Mestre em Direito Comercial pela USP",
            "LL.M em Corporate Law pela NYU",
            "Professor convidado em pós-graduações de Direito Empresarial"
        ]
    },
    {
        name: "Ana Mafra",
        role: "Sócia Fundadora",
        areas: ["Contratos", "Patrimonial", "Sucessão"],
        bio: "Especialista em governança corporativa e planejamento sucessório. Atua como conselheira de empresas familiares e possui vasta experiência na mediação de conflitos societários e estruturação de holdings.",
        education: [
            "Doutora em Direito Civil pela PUC-SP",
            "Especialista em Governance, Risk & Compliance",
            "Membro do IBGC (Instituto Brasileiro de Governança Corporativa)"
        ]
    }
]

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-neutral-50 py-24">
            <div className="container-custom">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">Nossa Equipe</h1>
                    <p className="text-lg text-neutral-600">
                        Acreditamos que a advocacia estratégica exige senioridade.
                        Por isso, nossos sócios atuam diretamente em cada demanda.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {partners.map((partner, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden border border-neutral-200 shadow-sm">
                            <div className="h-64 bg-neutral-200 relative group">
                                <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                                    {/* Placeholder for photo */}
                                    <span className="text-4xl font-serif">{partner.name.split(' ').map(n => n[0]).join('')}</span>
                                </div>
                                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors" />
                            </div>
                            <div className="p-8">
                                <div className="mb-6">
                                    <h2 className="text-2xl font-serif text-neutral-900 mb-1">{partner.name}</h2>
                                    <p className="text-primary-700 font-medium">{partner.role}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {partner.areas.map(area => (
                                        <span key={area} className="text-xs bg-neutral-100 px-2 py-1 rounded text-neutral-600 font-medium">
                                            {area}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-neutral-600 mb-6 text-sm leading-relaxed">
                                    {partner.bio}
                                </p>

                                <div className="mb-8">
                                    <h4 className="text-sm font-bold text-neutral-900 mb-2 uppercase tracking-wide">Formação</h4>
                                    <ul className="space-y-1">
                                        {partner.education.map((edu, idx) => (
                                            <li key={idx} className="text-sm text-neutral-600">• {edu}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex gap-4 pt-6 border-t border-neutral-100">
                                    <Button variant="outline" size="sm" asChild>
                                        <Link href="#"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</Link>
                                    </Button>
                                    <Button variant="outline" size="sm" asChild>
                                        <Link href="mailto:contato@barrosmafra.com.br"><Mail className="mr-2 h-4 w-4" /> E-mail</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
