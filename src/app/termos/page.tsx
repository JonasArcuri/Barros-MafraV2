export default function TermsPage() {
    return (
        <div className="min-h-screen bg-neutral-50 py-24">
            <div className="container-custom max-w-3xl">
                <h1 className="text-3xl font-serif text-neutral-900 mb-8">Termos de Uso</h1>
                <div className="prose prose-neutral max-w-none">
                    <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
                    <p>
                        Ao acessar o site da Barros & Mafra Advogados, você concorda com estes termos de uso.
                    </p>
                    <h3>1. Natureza Informativa</h3>
                    <p>
                        O conteúdo deste site tem caráter exclusivamente informativo e não constitui consulta ou orientação jurídica.
                        A utilização das informações aqui contidas não cria relação advogado-cliente.
                    </p>
                    <h3>2. Propriedade Intelectual</h3>
                    <p>
                        Todo o conteúdo (textos, logos, imagens) é de propriedade da Barros & Mafra Advogados ou licenciado para uso.
                        É vedada a reprodução sem autorização prévia.
                    </p>
                    <h3>3. Limitação de Responsabilidade</h3>
                    <p>
                        Não nos responsabilizamos por danos decorrentes do uso deste site ou da confiança depositada em informações aqui apresentadas sem a devida orientação profissional específica.
                    </p>
                </div>
            </div>
        </div>
    )
}
