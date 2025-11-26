const ContactCard = ({ name, account, iconSrc, href }) => {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            
            className="group bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-xl border border-purple-800/30 hover:border-purple-500 shadow-lg shadow-purple-900/10 hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center w-full h-45 justify-center"
        >
           
            <img 
                src={iconSrc} 
                alt={`${name} Icon`} 
                
                className="w-16 h-16 mx-auto mb-3 object-contain" 
            />
            
            <span className="text-xl font-bold text-amber-50 group-hover:text-purple-400 transition-colors duration-200">
                {name}
            </span>
           
            <span className="text-sm text-gray-400 mt-1 truncate max-w-full">
                {account}
            </span>
        </a>
    );
};

export default ContactCard;