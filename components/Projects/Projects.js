import Card from "../Card/Card"

const Projects = () => {
    return(
        
        <section 
            id="Projetos" 
            className="flex flex-col w-full py-24 px-6 md:px-20 max-w-7xl mx-auto scroll-mt-24"
            data-aos='fade-up'
        >
            
            
            <div className="flex flex-col mb-16"> 
                <h2 className="text-5xl md:text-6xl font-bold text-amber-50 mb-4 tracking-tight">
                    Projetos
                </h2>
                
                <div className="h-1.5 w-32 bg-gradient-to-r from-purple-600 to-purple-900 rounded-full"></div>
            </div>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
               
                <Card name='Jogo do Número Secreto' desc='Jogo de adivinhação que demonstra o domínio de JavaScript Vanilla e manipulação da DOM.' imagem='/imagens/NumeroSecreto.png' link="https://github.com/DaviAlves06/Jogo-do-Numero-Secreto" data-aos='fade-up' data-aos-delay='0'></Card>
                <Card name='Organo: Gestão de Times' desc='Aplicação construída em React que permite a criação e visualização dinâmica de times e colaboradores. Foco em componentização e estados.' imagem='/imagens/Organo.png' link="https://github.com/DaviAlves06/Organo" data-aos='fade-up' data-aos-delay='100'></Card>
                <Card name='AtmoGuard: Protótipo IoT' desc='Projeto de prototipagem em Engenharia de Software focado em monitoramento atmosférico e segurança, aplicando conceitos de IoT.' imagem='/imagens/AtmoGuard.png' link="https://github.com/DaviAlves06/AtmoGuard-Prototipo" data-aos='fade-up' data-aos-delay='200'></Card>
                <Card name='Word Guess: Forca das frutas' desc='Jogo de adivinhação de palavras (forca) construído inteiramente em Python, focado em lógica de programação e manipulação de strings.' imagem='/imagens/Forca.png' link="https://github.com/DaviAlves06/Word-Guess" data-aos='fade-up' data-aos-delay='300'></Card>
                <Card name='WorkFlow: Protótipo' desc='Protótipo de sistema de automação e gerenciamento de fluxo de trabalho, desenvolvido em Python para otimização de processos.' imagem='/imagens/Workflow.png' link="https://github.com/DaviAlves06/Workflow-Prototipo-Python-" data-aos='fade-up' data-aos-delay='400'></Card>
                <Card name='Meu Portfólio' desc='Este projeto é a minha apresentação digital, construído com React e Tailwind CSS focado em design e responsividade.' imagem='/imagens/Portfolio.png' link="https://github.com/DaviAlves06/portfolio" data-aos='fade-up' data-aos-delay='500'></Card>

            </div>

            <div className="mt-32 border-t border-purple-900/30 pt-10"></div>

        </section>
    )
}

export default Projects