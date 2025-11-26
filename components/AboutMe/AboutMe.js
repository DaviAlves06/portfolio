import Card from "../Card/Card";

const AboutMe = () => {
  return (
   
    <section id="Sobre" className="flex flex-col w-full py-24 px-6 md:px-20 max-w-7xl mx-auto">
      
    
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-amber-50 mb-4 tracking-tight">
          Sobre mim
        </h2>
       
        <div className="h-1.5 w-32 bg-gradient-to-r from-purple-600 to-purple-900 rounded-full"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
        
        {/* Coluna da Narrativa (Texto)*/}
        <div className="lg:w-3/5 space-y-8 text-lg sm:text-xl text-gray-300 leading-loose text-justify font-light">
          <p>
            Minha jornada começou na área técnica com Edificações na ETEC, o que me deu 
            uma base sólida em projetos e exatidão. Hoje, estou pivotando esse conhecimento 
            lógico para o mundo digital, cursando <strong className="text-purple-400 font-semibold">Engenharia de Software na FIAP</strong>.
          </p>
          <p>
            Atualmente atuo como Assistente Administrativo Financeiro na TPF Engecorps, 
            onde desenvolvo soft skills essenciais como organização, gestão de tempo e trabalho 
            em equipe. Paralelamente, dedico meus estudos ao desenvolvimento de software, 
            focado em criar soluções eficientes.
          </p>
          
          {/* Destaque final com borda lateral */}
          <div className="border-l-4 border-purple-500 pl-6 py-2 bg-purple-900/10 rounded-r-lg">
            <p className="font-medium text-amber-100 italic">
              "Busco transicionar para uma posição de Estágio ou Júnior em Desenvolvimento, 
              trazendo a maturidade do ambiente corporativo somada à inovação acadêmica."
            </p>
          </div>
        </div>

        {/* Coluna de Foco Técnico (Cards) */}
        <div className="lg:w-2/5 flex flex-col gap-6 w-full">
          <h3 className="text-3xl font-semibold text-amber-50 mb-4">Foco Técnico</h3>
          
          {/* Card 1 */}
          <div className="group bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-xl border border-purple-800/30 hover:border-purple-500 shadow-lg shadow-purple-900/10 hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1">
            <span className="block text-purple-400 font-bold text-xs tracking-wider uppercase mb-2 group-hover:text-purple-300">Front-end</span>
            <p className="text-amber-50 text-lg font-medium">React, Tailwind, Front (JS, HTML e CSS)</p>
          </div>

          {/* Card 2 */}
          <div className="group bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-xl border border-purple-800/30 hover:border-purple-500 shadow-lg shadow-purple-900/10 hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1">
            <span className="block text-purple-400 font-bold text-xs tracking-wider uppercase mb-2 group-hover:text-purple-300">Back-end</span>
            <p className="text-amber-50 text-lg font-medium">Python, Node.js</p>
          </div>

          {/* Card 3 */}
          <div className="group bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-xl border border-purple-800/30 hover:border-purple-500 shadow-lg shadow-purple-900/10 hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1">
            <span className="block text-purple-400 font-bold text-xs tracking-wider uppercase mb-2 group-hover:text-purple-300">Metodologias</span>
            <p className="text-amber-50 text-lg font-medium">Design Thinking (UX/UI), Agile</p>
          </div>
        </div>

      </div>

      {/* Aba de Certificados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mt-20">
               
                <Card name='React: Desenvolvendo com JavaScript (Alura)' desc='' imagem='/imagens/Davi - Curso React_ desenvolvendo com JavaScript - Alura_pages-to-jpg-0001.jpg'></Card>
                <Card name='Lógica de Programação: Explore Funções e Listas (Alura)' desc='' imagem='\imagens\Davi - Curso Lógica de programação_ explore funções e listas - Alura (1)_page-0001.jpg'></Card>
                <Card name='Lógica de Programação: Mergulhe em Programação com JavaScript (Alura)' desc='' imagem='\imagens\Davi - Curso Lógica de programação_ mergulhe em programação com JavaScript - Alura_page-0001.jpg'></Card>
                <Card name='Blockchain - Conceitos (FIAP)' desc='' imagem='\imagens\Blockchain - FIAP_page-0001.jpg'></Card>
                <Card name='Design Thinking - Process (FIAP)' desc='' imagem='\imagens\Design Thinking - Process FIAP_page-0001.jpg'></Card>
                <Card name='Formação Social e Sustentável (FIAP)' desc='' imagem='\imagens\Formação Social e Sustentável FIAP (1)_page-0001.jpg'></Card>
                <Card name='Administração Estratégica (IFRS)' desc='' imagem='\imagens\Administração_Estratégica-Certificado_digital_2825252_pages-to-jpg-0001.jpg'></Card>
                <Card name='Excel Básico (Bradesco)' desc='' imagem='\imagens\Excel Básico_page-0001.jpg'></Card>
                <Card name='Inglês Iniciante: Comunicação Essencial (Alura)' desc='' imagem='\imagens\Davi.alves.santos190 - Modulo Inglês Iniciante - Comunicação essencial -_page-0001.jpg'></Card>

                

            </div>

      
      <div className="mt-32 border-t border-purple-900/30 pt-10"></div>

    </section>
  );
};

export default AboutMe;