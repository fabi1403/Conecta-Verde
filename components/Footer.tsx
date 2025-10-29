
import React from 'react';
import { motion } from 'framer-motion';
import type { Page } from '../types';
import { Logo, FacebookIcon, InstagramIcon, TwitterIcon, LocationIcon, PhoneIcon, EmailIcon } from './Icons';

export const Footer: React.FC<{navigateTo: (page: Page) => void;}> = ({ navigateTo }) => (
    <motion.footer 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="text-[#f5f1e8] pt-16 pb-6 relative"
        style={{
            background: `
                radial-gradient(ellipse 120% 70% at 70% 80%, rgba(87, 24, 69, 0.20), transparent 52%),
                radial-gradient(ellipse 160% 45% at 30% 30%, rgba(153, 27, 27, 0.16), transparent 58%),
                radial-gradient(ellipse 85% 100% at 10% 60%, rgba(69, 26, 3, 0.22), transparent 46%),
                #1c1917
            `,
        }}
    >
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                {/* Brand Info */}
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-white p-1 rounded-full">
                            <Logo />
                        </div>
                        <h2 className="text-2xl font-bold text-white">Conecta Verde</h2>
                    </div>
                    <p className="text-gray-300/70">
                        Sembrando futuro, un residuo a la vez.
                    </p>
                </div>

                {/* Contact Info */}
                <div>
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                         <img src="/UEGEA.png" alt="Logo UEGEA" className="h-8 w-8 bg-white rounded-full p-1" />
                        <h3 className="font-bold text-lg text-white uppercase tracking-wider">Contacto</h3>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-center justify-center md:justify-start gap-3">
                            <LocationIcon className="h-5 w-5 text-gray-300/70"/>
                            <span className="text-gray-300/70">U.E. General Eloy Alfaro</span>
                        </li>
                         <li className="flex items-center justify-center md:justify-start gap-3">
                            <PhoneIcon className="h-5 w-5 text-gray-300/70"/>
                            <span className="text-gray-300/70">(03) 272-6019</span>
                        </li>
                         <li className="flex items-center justify-center md:justify-start gap-3">
                            <EmailIcon className="h-5 w-5 text-gray-300/70"/>
                            <span className="text-gray-300/70">uegea@gmail.com</span>
                        </li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="font-bold text-lg mb-4 text-white uppercase tracking-wider">Síguenos</h3>
                    <p className="text-gray-300/70 mb-4">Únete a nuestra comunidad en redes sociales.</p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <motion.a 
                            href="#" 
                            aria-label="Facebook" 
                            className="text-gray-300/70 hover:text-white transform hover:scale-110 transition-transform"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        ><FacebookIcon /></motion.a>
                        <motion.a 
                            href="#" 
                            aria-label="Instagram" 
                            className="text-gray-300/70 hover:text-white transform hover:scale-110 transition-transform"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        ><InstagramIcon /></motion.a>
                        <motion.a 
                            href="#" 
                            aria-label="Twitter" 
                            className="text-gray-300/70 hover:text-white transform hover:scale-110 transition-transform"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        ><TwitterIcon /></motion.a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 pt-6 border-t border-gray-100/20 text-center text-gray-100/50 text-sm">
                <p>&copy; {new Date().getFullYear()} Conecta Verde. FBN.</p>
            </div>
        </div>
    </motion.footer>
);