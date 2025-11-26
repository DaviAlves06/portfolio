const Header = () => {
   
    const navItems = [
        { name: "Home", href: "#Home" },
        { name: "Sobre", href: "#Sobre" },
        { name: "Projetos", href: "#Projetos" },
        { name: "Contatos", href: "#Contatos" }
    ];

    return (
        
        <nav className="fixed top-0 left-0 w-full bg-purple-900 shadow-xl z-50">
            
            <div className="flex items-center justify-between h-20 px-6 md:px-20 max-w-7xl mx-auto">
                
                {/* Logo */}
                <a href="#Home" className="text-amber-50 font-extralight text-xl sm:text-2xl tracking-wider hover:text-purple-400 hover:-translate-y-0.5 transition-all duration-200">
                    Davi Alves
                </a>

                {/* Links */}
                <div className="flex space-x-4 md:space-x-10">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            
                            className="font-semibold text-gray-200 text-sm md:text-lg lg:text-xl cursor-pointer hover:text-amber-400 hover:shadow-orange-500 shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Header