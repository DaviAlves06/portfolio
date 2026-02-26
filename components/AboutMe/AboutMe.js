'use client';

import Card from "../Card/Card";
import React, { useState } from "react";
import Projects from "../Projects/Projects";

const AboutMe = (props) => {

  const MAX_CERTIFICATES = 3;
  const [isViewingAll, setIsViewingAll] = useState(false);

  const certificateContainerClasses = isViewingAll ? "max-h-[5000px] opacity-100": "max-h-0 opacity-0";

  const allCertificates = [
        { name: 'Arquiteturas RAG com LLMs (Alura)', desc: '', imagem: '/imagens/Certificado Arquiteturas RAG com LLMs_page-0001.jpg' },
        { name: 'Inglês Iniciante: Comunicação Essencial (Alura)', desc: '', imagem: '/imagens/Davi.alves.santos190 - Modulo Inglês Iniciante - Comunicação essencial -_page-0001.jpg' },
        { name: 'React: Desenvolvendo com JavaScript (Alura)', desc: '', imagem: '/imagens/Davi - Curso React_ desenvolvendo com JavaScript - Alura_pages-to-jpg-0001.jpg' },
        { name: 'Lógica de Programação: Explore Funções e Listas (Alura)', desc: '', imagem: '/imagens/Davi - Curso Lógica de programação_ explore funções e listas - Alura (1)_page-0001.jpg' },
        { name: 'Lógica de Programação: Mergulhe em Programação com JavaScript (Alura)', desc: '', imagem: '/imagens/Davi - Curso Lógica de programação_ mergulhe em programação com JavaScript - Alura_page-0001.jpg' },
        { name: 'Imersão de Dados com Python (Alura)', desc: '', imagem: '/imagens/Davi - Imersão de Dados com Python_page-0001.jpg' },
        { name: 'Design Thinking - Process (FIAP)', desc: '', imagem: '/imagens/Design Thinking - Process FIAP_page-0001.jpg' },
        { name: 'Blockchain - Conceitos (FIAP)', desc: '', imagem: '/imagens/Blockchain - FIAP_page-0001.jpg' },
        { name: 'Formação Social e Sustentável (FIAP)', desc: '', imagem: '/imagens/Formação Social e Sustentável FIAP (1)_page-0001.jpg' },
        { name: 'Workshop Figma com IA (EBAC)', desc: '', imagem: '/imagens/Workshop Figma com IA_page-0001.jpg' },
        { name: 'Workshop UX/UI (EBAC)', desc: '', imagem: '/imagens/Workshop UX_UI_page-0001.jpg' },
        { name: 'Administração Estratégica (IFRS)', desc: '', imagem: '/imagens/Administração_Estratégica-Certificado_digital_2825252_pages-to-jpg-0001.jpg' },
        { name: 'Excel Básico (Bradesco)', desc: '', imagem: '/imagens/Excel Básico_page-0001.jpg' }
        
  ]

  const allExtraCertificates = allCertificates.slice(MAX_CERTIFICATES);

  const handleToggle = () => {
    setIsViewingAll(!isViewingAll);
  };

  return (
   
    <section id="Sobre" className="flex flex-col w-full py-24 px-6 md:px-20 max-w-7xl mx-auto scroll-mt-24" {...props} data-aos='fade-up'>
      
    
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
            Minha jornada profissional é pautada pela exatidão e lógica. Iniciei no setor técnico com Edificações (ETEC), onde desenvolvi o rigor analítico que hoje aplico na <strong className="text-purple-400 font-semibold">Engenharia de Software na FIAP</strong>. Atualmente, foco em transformar dados em soluções inteligentes através do Python e arquiteturas de IA Generativa.
          </p>
          <p>
            No meu papel atual na TPF Engecorps, refino soft skills críticas como gestão de projetos e colaboração em equipe. Paralelamente, mergulho em RAG (Retrieval-Augmented Generation) e automação, construindo aplicações que não apenas funcionam, mas resolvem problemas complexos de negócios com eficiência.
          </p>
          
          {/* Destaque final com borda lateral */}
          <div className="border-l-4 border-purple-500 pl-6 py-2 bg-purple-900/10 rounded-r-lg">
            <p className="font-medium text-amber-100 italic">
              "Combinando a precisão do setor técnico com a maturidade do ambiente corporativo, foco em desenvolver aplicações de IA que geram valor real. Busco transicionar para desafios onde o Python e a inovação tecnológica sejam o motor da solução."
            </p>
          </div>
        </div>

        {/* Coluna de Foco Técnico (Cards) */}
        <div className="lg:w-2/5 flex flex-col gap-6 w-full">
          <h3 className="text-3xl font-semibold text-amber-50 mb-4">Foco Técnico</h3>
          
          {/* Card 1 */}
          <div className="group bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-xl border border-purple-800/30 hover:border-purple-500 shadow-lg shadow-purple-900/10 hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 active:border-purple-500 active:shadow-purple-500/20 active:-translate-y-1">
            <span className="block text-purple-400 font-bold text-xs tracking-wider uppercase mb-2 group-hover:text-purple-300 group-active:text-purple-300">Back-end & AI</span>
            <p className="text-amber-50 text-lg font-medium">Python (Pandas/NumPy), LangChain, Gemini API, RAG Architectures</p>
          </div>

          {/* Card 2 */}
          <div className="group bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-xl border border-purple-800/30 hover:border-purple-500 shadow-lg shadow-purple-900/10 hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 active:border-purple-500 active:shadow-purple-500/20 active:-translate-y-1">
            <span className="block text-purple-400 font-bold text-xs tracking-wider uppercase mb-2 group-hover:text-purple-300 group-active:text-purple-300">Full-stack Core</span>
            <p className="text-amber-50 text-lg font-medium">Node.js, React, Tailwind CSS, JavaScript</p>
          </div>

          {/* Card 3 */}
          <div className="group bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-xl border border-purple-800/30 hover:border-purple-500 shadow-lg shadow-purple-900/10 hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 active:border-purple-500 active:shadow-purple-500/20 active:-translate-y-1">
            <span className="block text-purple-400 font-bold text-xs tracking-wider uppercase mb-2 group-hover:text-purple-300 group-active:text-purple-300">Data & Tools</span>
            <p className="text-amber-50 text-lg font-medium">ChromaDB (Vector DB), Git, Agile, SQL</p>
          </div>
        </div>

      </div>

      <div className="mt-32 border-t border-purple-900/30 pt-10"></div>

    <Projects data-aos='fade-up' data-aos-delay='0' />

      {/* Aba de Certificados */}
      <div className="flex flex-col mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-amber-50 mb-4 tracking-tight">
            Certificados
        </h2>

        <div className="h-1.5 w-32 bg-gradient-to-r from-purple-600 to-purple-900 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
        {allCertificates.slice(0, MAX_CERTIFICATES).map((cert, index) => (
          <Card 
            key={index} 
            name={cert.name} 
            desc={cert.desc} 
            imagem={cert.imagem}
          />
        ))}
      </div>

      <div 
        className={`grid grid-cols-1 lg:grid-cols-3 gap-12 pt-12 ${certificateContainerClasses} overflow-hidden transition-all duration-1000 ease-in-out items-stretch`}
        style={{ transitionProperty: 'max-height, opacity' }}
      >
        {allExtraCertificates.map((cert, index) => (
          <Card 
            key={index + MAX_CERTIFICATES} 
            name={cert.name} 
            desc={cert.desc} 
            imagem={cert.imagem}
          />
        ))}
      </div>

      {/* Botão de Toggle */}
      {allCertificates.length > MAX_CERTIFICATES && (
        <div className="flex justify-center mt-12">
            <button
                onClick={handleToggle}
                className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-purple-600/50 transition-all duration-300 transform active:scale-105 active:bg-purple-700 hover:scale-105"
            >
                {isViewingAll ? (
                    <>
                        <span>Ver Menos</span>
                        <svg className="w-5 h-5 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </>
                ) : (
                    <>
                        <span>Ver Todos ({allExtraCertificates.length} a mais)</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </>
                )}
            </button>
        </div>
      )}

      
      <div className="mt-32 border-t border-purple-900/30 pt-10"></div>

    </section>
  );
};

export default AboutMe;