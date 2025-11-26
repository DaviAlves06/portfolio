import ContactCard from "../ContactCard/ContactCard";

const Contacts = () => {
    
    const contactLinks = [
        {
            name: "GitHub",
            account: "DaviAlves06",
            iconSrc: "/imagens/3073768.webp", 
            href: "https://github.com/DaviAlves06"
        },
        {
            name: "E-mail",
            account: "davi.alves.santos190@gmail.com",
            iconSrc: "/imagens/Gmail_icon_(2020).svg.webp", 
            href: "mailto:davi.alves.santos190@gmail.com?subject=Oportunidade%20de%20Contato%20Profissional%20-%20Portfolio&body=Olá%20Davi%2C%20gostaria%20de%20discutir%20uma%20oportunidade."
        },
        {
            name: "LinkedIn",
            account: "Davi Alves",
            iconSrc: "/imagens/LinkedIn_icon.svg.png", 
            href: "https://www.linkedin.com/in/davi-alves-a705ab360/"
        }
    ];
    
    return(
        
        <section id="Contatos" className="flex flex-col w-full py-24 px-6 md:px-20 max-w-7xl mx-auto">

            
            <div className="flex flex-col mb-16"> 
                <h2 className="text-5xl md:text-6xl font-bold text-amber-50 mb-4 tracking-tight">
                    Contatos
                </h2>
               
                <div className="h-1.5 w-32 bg-gradient-to-r from-purple-600 to-purple-900 rounded-full"></div>
            </div>

            {/* Container dos Cards */}
       
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {contactLinks.map((contact) => (
                    <ContactCard
                        key={contact.name}
                        name={contact.name}
                        account={contact.account}
                        iconSrc={contact.iconSrc}
                        href={contact.href}
                    />
                ))}
            </div>

            {/* Footer*/}
            <div className="mt-32 border-t border-purple-900/30 pt-10">
                <p className="text-center text-gray-500 text-sm">© {new Date().getFullYear()} Davi Alves. Desenvolvido com React e Tailwind CSS.</p>
            </div>

        </section>
    )
}

export default Contacts