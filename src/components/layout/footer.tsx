import Link from "next/link"

export function SiteFooter() {
    return (
        <footer className="bg-neutral-900 text-neutral-400 py-12 border-t border-neutral-800">
            <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Brand */}
                <div className="md:col-span-1">
                    <Link href="/" className="inline-block mb-4">
                        <span className="font-serif text-2xl text-neutral-50 font-semibold tracking-tight">
                            Barros <span className="text-neutral-500">&</span> Mafra
                        </span>
                    </Link>
                    <p className="text-sm leading-relaxed mb-6">
                        Assessoria jurídica estratégica para empresas, sócios e patrimônio.
                    </p>
                    <div className="text-sm">
                        <p>Av. Paulista, 0000 - Cj. 12</p>
                        <p>São Paulo - SP</p>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="font-serif text-neutral-50 mb-4">Escritório</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/#equipe" className="hover:text-white transition-colors">Sócios</Link></li>
                        <li><Link href="/#atuacao" className="hover:text-white transition-colors">Áreas de Atuação</Link></li>
                        <li><Link href="/conteudos" className="hover:text-white transition-colors">Artigos & Insights</Link></li>
                        <li><Link href="/cases" className="hover:text-white transition-colors">Casos</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-serif text-neutral-50 mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link></li>
                        <li><Link href="/termos" className="hover:text-white transition-colors">Termos de Uso</Link></li>
                        <li><span className="cursor-default text-neutral-600">OAB/SP 000.000</span></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-serif text-neutral-50 mb-4">Contato</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="mailto:contato@barrosmafra.com.br" className="hover:text-white transition-colors">contato@barrosmafra.com.br</a></li>
                        <li><a href="https://wa.me/5511999999999" className="hover:text-white transition-colors">WhatsApp: (11) 99999-9999</a></li>
                        <li className="pt-4">
                            <span className="block text-xs text-neutral-600">
                                Atendimento de seg. a sex., das 9h às 18h.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container-custom mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
                <p>&copy; {new Date().getFullYear()} Barros & Mafra Advogados. Todos os direitos reservados.</p>
                <p className="mt-2 md:mt-0">Este site tem caráter informativo e não substitui consulta jurídica.</p>
            </div>
        </footer>
    )
}
