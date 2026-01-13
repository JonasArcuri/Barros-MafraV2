import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ContactCTASection() {
    return (
        <section className="py-24 bg-primary-700 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
                </svg>
            </div>

            <div className="container-custom relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
                    Sua empresa precisa de<br /> inteligência jurídica estratégica?
                </h2>
                <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
                    Agende uma conversa inicial sem compromisso com nossos sócios para avaliarmos a aderência aos seus desafios.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button asChild size="lg" className="bg-white text-primary-700 hover:bg-neutral-100">
                        <Link href="/contato">
                            Agendar conversa
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-primary-600 hover:text-white hover:border-transparent">
                        <Link href="https://wa.me/5511999999999">
                            Falar no WhatsApp
                        </Link>
                    </Button>
                </div>

                <p className="mt-8 text-sm text-primary-200 opacity-80">
                    Retorno garantido em até 1 dia útil para solicitações qualificadas.
                </p>
            </div>
        </section>
    )
}
