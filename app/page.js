import Header from "@/components/Header/Header";
import AboutMe from "@/components/AboutMe/AboutMe";
import Projects from "@/components/Projects/Projects";
import Contacts from "@/components/Contacts/Contacts";

export default function Home() {

  return (
    <div className="flex flex-col h-full w-full bg-gradient-to-t from-purple-950 via-neutral-800 to-black min-h-screen gap-2">
      
      <Header></Header>

        <section id="Home" className="flex flex-col w-full pt-28 pb-10 max-w-7xl mx-auto px-6 md:px-20">
            
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mt-30 mb-8">
              
              {/* Título */}
              <h1 className="text-white font-semibold text-5xl sm:text-7xl text-center lg:text-8xl lg:text-start leading-tight mb-6 lg:mb-0 w-full lg:w-3/4">
                  Bem vindo<br/> ao Meu Portfólio! 
              </h1>
              
              {/* Imagem de Perfil */}
              <img
                  src="\imagens\WhatsApp Image 2025-11-26 at 07.54.53.jpeg" 
                  alt="Davi Alves - Foto de Perfil" 
                  className="rounded-full border-4 border-purple-500 h-40 w-40 sm:h-52 sm:w-52 object-cover 
                            shadow-2xl shadow-purple-500/50 
                            transition-all duration-300 transform hover:scale-105 
                            motion-safe:animate-pulse-slow lg:mt-6" 
              />
          </div>

          {/* Barra */}
          <div className="h-1.5 bg-gradient-to-r from-purple-600 to-purple-900 rounded-full w-full max-w-7xl mx-auto px-6 md:px-20"></div>

          <div className="w-full">

          {/* Subtítulo */}
          <p className="leading-tight text-gray-500 font-bold text-lg sm:text-xl lg:text-2xl mt-5 h-40">By Davi Alves</p>
          </div>

        </section>

        <AboutMe></AboutMe>

        <Projects></Projects>

        <Contacts></Contacts>

    </div>
  );
}