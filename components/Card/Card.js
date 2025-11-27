const Card = ({name, desc, imagem, link}) => {
    return(
       
        <a 
          href={link} 
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-xl border border-purple-800/30 hover:border-purple-500 shadow-lg shadow-purple-900/10 hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 block h-full cursor-pointer active:border-purple-500 active:-translate-y-1 active:shadow-purple-500/20"
        >
            {/* Imagem com tamanho fixo */}
            <img 
              src={imagem} 
              className="w-full h-48 object-cover rounded-md mb-4 border border-purple-800/50" 
              alt={name || "Imagem do projeto"} 
            />

            <div>
                {/* Título */}
                <h3 className="text-2xl font-bold text-amber-50 mb-2 group-hover:text-purple-400 group-active:text-purple-400 transition-colors">
                    {name}
                </h3>
                {/* Descrição */}
                <p className="text-base text-gray-300 leading-relaxed font-light">
                    {desc}
                </p>
            </div>
        </a>
    )
}

export default Card