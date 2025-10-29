
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Page } from '../types';
import { Logo, CartIcon, HomeIcon, CogIcon, TagIcon, PlusIcon } from './Icons';

interface HeaderProps {
    navigateTo: (page: Page) => void;
    cartItemCount: number;
}

export const Header: React.FC<HeaderProps> = ({ navigateTo, cartItemCount }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const handleNav = (page: Page) => {
        navigateTo(page);
        setMobileMenuOpen(false);
    }
    
    const navLinks = [
        { page: 'inicio' as Page, label: 'Inicio', icon: <HomeIcon /> },
        { page: 'funcionamiento' as Page, label: 'Funcionamiento', icon: <CogIcon /> },
        { page: 'productos' as Page, label: 'Productos', icon: <TagIcon /> },
        { page: 'contribucion' as Page, label: 'Contribución', icon: <PlusIcon /> },
    ];
    
    return (
        <>
            <motion.header 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="backdrop-blur-md shadow-sm sticky top-0 z-50"
                style={{
                    background: `linear-gradient(120deg, rgba(200, 230, 201, 0.9) 0%, rgba(220, 237, 200, 0.9) 20%, rgba(241, 248, 233, 0.9) 40%, rgba(255, 253, 231, 0.9) 60%, rgba(255, 249, 196, 0.9) 80%, rgba(240, 244, 195, 0.9) 100%)`,
                }}
            >
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <motion.a 
                        href="#" 
                        onClick={(e) => { e.preventDefault(); handleNav('inicio'); }} 
                        className="flex items-center gap-3 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Logo />
                        <h1 className="text-2xl font-bold text-[#2a552e] group-hover:text-[#8db246] transition-colors">Conecta Verde</h1>
                    </motion.a>
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                             <motion.a 
                                 key={link.page} 
                                 href="#" 
                                 onClick={(e) => { e.preventDefault(); handleNav(link.page); }} 
                                 className="flex items-center gap-2 relative text-[#5a442a] font-semibold transition-colors duration-300 hover:text-[#2a552e] after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#8db246] after:transform after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
                                 whileHover={{ scale: 1.05 }}
                                 whileTap={{ scale: 0.95 }}
                             >
                                {React.cloneElement(link.icon, { className: 'h-5 w-5' })}
                                <span>{link.label}</span>
                            </motion.a>
                        ))}
                    </nav>
                    <div className="flex items-center gap-4">
                        <motion.button 
                            onClick={() => handleNav('carrito')} 
                            className="relative text-[#5a442a] hover:text-[#2a552e] transition duration-300 transform hover:scale-110"
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <CartIcon />
                            {cartItemCount > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-[#f5f1e8]">{cartItemCount}</span>}
                        </motion.button>
                        <button id="hamburger-button" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className={`md:hidden hamburger space-y-1.5 z-20 ${isMobileMenuOpen ? 'open' : ''}`}>
                            <div className="line line-1 h-0.5 w-6 bg-[#5a442a] rounded-md transition-all duration-300 ease-in-out"></div>
                            <div className="line line-2 h-0.5 w-6 bg-[#5a442a] rounded-md transition-all duration-300 ease-in-out"></div>
                            <div className="line line-3 h-0.5 w-6 bg-[#5a442a] rounded-md transition-all duration-300 ease-in-out"></div>
                        </button>
                    </div>
                </div>
            </motion.header>
            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-full bg-[#f5f1e8] z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                 <nav className="flex flex-col items-center justify-center h-full text-center space-y-8">
                    {navLinks.map(link => (
                         <motion.a 
                             key={link.page} 
                             href="#" 
                             onClick={(e) => { e.preventDefault(); handleNav(link.page); }} 
                             className="flex items-center gap-4 text-[#5a442a] text-3xl font-bold transition duration-300 hover:text-[#2a552e]"
                             whileHover={{ scale: 1.1 }}
                             whileTap={{ scale: 0.9 }}
                         >
                             {React.cloneElement(link.icon, { className: 'h-8 w-8' })}
                             <span>{link.label}</span>
                         </motion.a>
                    ))}
                </nav>
            </div>
        </>
    );
};