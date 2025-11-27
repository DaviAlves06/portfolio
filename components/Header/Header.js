'use client';

import { Link } from 'react-scroll';

const Header = () => {
   
    const navItems = [
        { name: "Home", href: "Home" },
        { name: "Sobre", href: "Sobre" },
        { name: "Projetos", href: "Projetos" },
        { name: "Contatos", href: "Contatos" }
    ];

    return (
        
        <nav className="fixed top-0 left-0 w-full bg-gradient-to-t from-purple-500/90 via-purple-600 to-purple-800 shadow-xl z-50">
            
            <div className="flex items-center justify-between h-20 px-6 md:px-20 max-w-7xl mx-auto">
                
                {/* Logo */}
                <Link 
                    to="Home" 
                    smooth={true} 
                    duration={400} 
                    offset={-96} 
                    className="text-amber-50 font-extralight text-xl sm:text-2xl tracking-wider cursor-pointer hover:text-amber-300 hover:-translate-y-0.5 transition-all duration-200 select-none active:text-amber-300 active:-translate-y-0.5 "
                >
                    Davi Alves
                </Link>

                {/* Links */}
                <div className="flex space-x-4 md:space-x-10">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href} 
                            smooth={true} 
                            duration={400}
                            offset={-96} 
                            className="font-semibold text-gray-200 text-sm md:text-lg lg:text-xl cursor-pointer hover:text-amber-400 hover:shadow-orange-500 shadow-2xl hover:-translate-y-0.5 transition-all duration-200 select-none active:text-amber-400 active:shadow-orange-500 active:-translate-y-0.5"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Header