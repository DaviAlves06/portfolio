import Header from "@/components/Header/Header";
import AboutMe from "@/components/AboutMe/AboutMe";
import Projects from "@/components/Projects/Projects";
import Contacts from "@/components/Contacts/Contacts";

export default function Home() {

  return (
    <div className="flex flex-col h-full w-full bg-gradient-to-t from-purple-950 via-black to-black min-h-screen gap-2">
      
      <Header></Header>

        <section id="Home" className="flex flex-col w-full py-40">
          {/* Título */}
          <h1 className="text-left text-white font-semibold text-5xl sm:text-7xl lg:text-8xl leading-tight mt-10 sm:mt-20 mb-5 px-6 md:px-20 max-w-7xl mx-auto">Bem vindo<br/> ao Meu Portfólio! </h1>
          {/* Barra */}
          <div className="h-1.5 bg-gradient-to-r from-purple-600 to-purple-900 rounded-full w-full max-w-7xl mx-auto px-6 md:px-20"></div>
          {/* Subtítulo */}
          <p className="leading-tight px-6 md:px-20 max-w-7xl mx-auto text-gray-500 font-bold text-lg sm:text-xl lg:text-2xl mt-5">By Davi Alves</p>
        </section>

        <AboutMe></AboutMe>

        <Projects></Projects>

        <Contacts></Contacts>

    </div>
  );
}