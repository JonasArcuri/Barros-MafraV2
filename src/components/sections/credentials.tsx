import { Zap, Shield, Users, Lock, ChevronRight } from "lucide-react"

const credentials = [
    {
        icon: Users,
        label: "Atuação direta dos sócios",
    },
    {
        icon: Shield,
        label: "Negociação e mitigação de risco",
    },
    {
        icon: Zap,
        label: "Estrutura enxuta, alta responsividade",
    },
    {
        icon: Lock,
        label: "Governança e conformidade",
    },
]

export function CredentialsSection() {
    return (
        <section className="bg-neutral-900 border-b border-neutral-800 py-12">
            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {credentials.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 text-neutral-300 group hover:text-white transition-colors">
                            <div className="p-2 rounded-full bg-neutral-800 text-neutral-400 group-hover:text-primary-400 group-hover:bg-neutral-800/50 transition-colors">
                                <item.icon size={20} />
                            </div>
                            <span className="text-sm font-medium">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
