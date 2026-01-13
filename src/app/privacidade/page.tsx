export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-neutral-50 py-24">
            <div className="container-custom max-w-3xl">
                <h1 className="text-3xl font-serif text-neutral-900 mb-8">Política de Privacidade</h1>
                <div className="prose prose-neutral max-w-none">
                    <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
                    <p>
                        A Barros & Mafra Advogados ("nós", "nosso") está comprometida com a proteção de seus dados pessoais.
                        Esta política descreve como coletamos, usamos e protegemos suas informações.
                    </p>
                    <h3>1. Coleta de Dados</h3>
                    <p>
                        Coletamos informações que você nos fornece diretamente via formulário de contato, como nome, e-mail, telefone e cargo.
                    </p>
                    <h3>2. Uso das Informações</h3>
                    <p>
                        Utilizamos seus dados para:
                    </p>
                    <ul>
                        <li>Responder a suas solicitações de contato;</li>
                        <li>Enviar newsletters ou materiais educativos (se autorizado);</li>
                        <li>Melhorar nossa comunicação e serviços.</li>
                    </ul>
                    <h3>3. Compartilhamento</h3>
                    <p>
                        Não vendemos nem alugamos seus dados pessoais. O compartilhamento ocorre apenas quando necessário para prestação de serviços ou cumprimento legal.
                    </p>
                </div>
            </div>
        </div>
    )
}
