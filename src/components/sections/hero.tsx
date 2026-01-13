"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MoveRight, FileText } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Arquitetura corporativa moderna"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/95 via-neutral-900/80 to-transparent" />
            </div>

            <div className="container-custom relative z-10 w-full">
                <div className="max-w-3xl text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight font-medium mb-6">
                            Assessoria jurídica estratégica para empresas, sócios e patrimônio.
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-neutral-300 mb-8 max-w-xl leading-relaxed"
                    >
                        Atuação corporativa com visão de negócio, precisão técnica e condução direta dos sócios.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button asChild size="lg" className="bg-white text-neutral-900 hover:bg-neutral-200 border-none">
                            <Link href="/contato">
                                Agendar conversa
                                <MoveRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10 hover:text-white">
                            <Link href="/contato?assunto=caso">
                                Enviar um caso
                                <FileText className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-12 pt-8 border-t border-white/20 flex flex-wrap gap-6 text-sm text-neutral-400"
                    >
                        <span>Confidencialidade</span>
                        <span className="w-1 h-1 rounded-full bg-neutral-600 self-center" />
                        <span>Agilidade</span>
                        <span className="w-1 h-1 rounded-full bg-neutral-600 self-center" />
                        <span>Senioridade</span>
                        <span className="w-1 h-1 rounded-full bg-neutral-600 self-center" />
                        <span>Atuação nacional</span>
                    </motion.div>

                    <div className="mt-4 text-xs text-neutral-500">
                        Retorno em até 1 dia útil.
                    </div>
                </div>
            </div>
        </section>
    )
}
