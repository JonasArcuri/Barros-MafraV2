export function AboutSection() {
    return (
        <section id="sobre" className="py-24 bg-neutral-900 text-neutral-50">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Manifesto */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif mb-8 leading-tight">
                            Não somos uma fábrica de processos. Somos artesãos da estratégia.
                        </h2>
                        <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
                            <p>
                                O Direito corporativo tradicional muitas vezes ignora o tempo e a realidade do negócio. Nós nascemos para corrigir isso.
                            </p>
                            <p>
                                Acreditamos na advocacia que viabiliza, não que trava. Que mitiga riscos reais, não imaginários. Que entende de margem, EBITDA e cap table tanto quanto de leis e precedentes.
                            </p>
                            <p>
                                Barros & Mafra é um escritório boutique focado em momentos críticos. Quando a decisão exige mais do que um parecer técnico: exige visão estratégica.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-white font-medium mb-2">Técnica + Negócio</h4>
                                <p className="text-sm text-neutral-500">Soluções que param em pé juridicamente e comercialmente.</p>
                            </div>
                            <div>
                                <h4 className="text-white font-medium mb-2">Discrição e Ética</h4>
                                <p className="text-sm text-neutral-500">Silêncio absoluto sobre suas movimentações estratégicas.</p>
                            </div>
                        </div>
                    </div>

                    {/* Sócio Placeholder - Could be an image in future */}
                    <div className="relative h-[600px] w-full bg-neutral-800 rounded-lg overflow-hidden flex items-center justify-center border border-neutral-700">
                        <div className="text-center p-8">
                            <div className="w-24 h-24 bg-neutral-700/50 rounded-full mx-auto mb-6 flex items-center justify-center">
                                <span className="text-4xl font-serif text-neutral-500">BM</span>
                            </div>
                            <h3 className="text-2xl font-serif text-white mb-2">Os Sócios</h3>
                            <p className="text-neutral-400 max-w-sm mx-auto">
                                Carlos Barros e Ana Mafra lideram pessoalmente todas as contas estratégicas, garantindo seniority-level attention em cada demanda.
                            </p>
                        </div>

                        {/* Decorative pattern */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-500 via-transparent to-transparent" />
                    </div>

                </div>
            </div>
        </section>
    )
}
