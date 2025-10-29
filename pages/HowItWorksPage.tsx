import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Page } from '../types';
import { POINTS_PER_KG, CLASSIFIED_MULTIPLIER } from '../constants';

// Fix: Create a custom AccordionItem component to replace the one from the incompatible library.
const AccordionItem: React.FC<{
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
}> = ({ title, children, isOpen, onToggle }) => {
    return (
        <div>
            <button
                onClick={onToggle}
                className="w-full text-left text-lg font-semibold text-[#5a442a] hover:bg-[#f5f1e8]/60 p-4 rounded-lg flex justify-between items-center transition-colors duration-200"
            >
                <span>{title}</span>
                <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2a552e]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </span>
            </button>
            {isOpen && (
                <div className="text-gray-600 px-4 pb-4">
                    {children}
                </div>
            )}
        </div>
    );
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      // Fix: Replaced "easeOut" string with its cubic-bezier array equivalent to resolve TypeScript type error.
      // FIX: Added 'as const' to correctly type the cubic-bezier array for framer-motion.
      ease: [0, 0, 0.58, 1] as const
    }
  }
};

export const HowItWorksPage: React.FC<{navigateTo: (page: Page) => void}> = ({navigateTo}) => {
    // Fix: Add state to manage the currently open accordion item.
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
    <motion.section 
        className="py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
    >
        <div className="container mx-auto px-4">
            <motion.div variants={sectionVariants} className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-[#2a552e] mb-4">¿Cómo Funciona?</h2>
                <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">Transforma tus residuos en recompensas. ¡Es simple, transparente y beneficioso para todos!</p>
            </motion.div>
            <motion.div variants={sectionVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="bg-[#f5f1e8] p-8 rounded-2xl">
                    <h3 className="text-2xl font-semibold text-[#5a442a] mb-4">1. Registra tus Residuos</h3>
                    <p className="text-gray-600 mb-4">Usa el formulario en la pestaña <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('contribucion'); }} className="text-[#2a552e] font-bold hover:underline">"Contribución"</a> para informarnos cuánto pesan tus residuos orgánicos.</p>
                    <h3 className="text-2xl font-semibold text-[#5a442a] mt-6 mb-4">2. Acumula EcoPuntos</h3>
                    <p className="text-gray-600 mb-4">Cada kilogramo que registras suma puntos a tu perfil. ¡Si los entregas clasificados, ganas puntos adicionales!</p>
                    <h3 className="text-2xl font-semibold text-[#5a442a] mt-6 mb-4">3. Canjea tus Recompensas</h3>
                    <p className="text-gray-600 mb-4">Visita la sección de <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('productos'); }} className="text-[#2a552e] font-bold hover:underline">"Productos"</a> y usa tus EcoPuntos para canjear compost, fertilizantes y más.</p>
                </div>
                <div className="flex justify-center">
                    <div className="bg-[#2a552e] p-8 rounded-2xl shadow-2xl text-white w-full">
                        <h4 className="text-2xl font-bold text-center mb-4 text-white">¡Tu Impacto Suma!</h4>
                        <div className="text-center bg-white/10 p-6 rounded-xl">
                            <p className="text-lg font-semibold">1 kg de Residuos = <span className="text-[#f5f1e8] font-bold text-xl">{POINTS_PER_KG} EcoPuntos</span></p>
                            <p className="text-lg font-semibold mt-2">1 kg Clasificado = <span className="text-[#f5f1e8] font-bold text-xl">{POINTS_PER_KG * CLASSIFIED_MULTIPLIER} EcoPuntos</span></p>
                        </div>
                        <p className="text-center mt-6 text-green-200">Clasificar tus residuos nos ayuda a procesarlos más rápido y genera un compost de mayor calidad.</p>
                    </div>
                </div>
            </motion.div>

             <motion.div variants={sectionVariants} className="mt-16 pt-12 border-t border-gray-200">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-extrabold text-[#2a552e] mb-2">Preguntas Frecuentes</h3>
                    <p className="text-lg text-gray-600">Resolvemos tus dudas para que te sumes al cambio.</p>
                </div>
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-2">
                    {/* Fix: Use the custom AccordionItem component and manage its state. */}
                    <AccordionItem
                        title="¿Qué tipo de residuos orgánicos puedo llevar?"
                        isOpen={openIndex === 0}
                        onToggle={() => handleToggle(0)}
                    >
                        <p>
                            Aceptamos principalmente restos de frutas y verduras, cáscaras de huevo, posos de café, restos de poda y estiércol de animales de granja. Por favor, evita carnes, lácteos, aceites y residuos procesados, ya que pueden afectar la calidad del compost.
                        </p>
                    </AccordionItem>
                    <AccordionItem
                        title="¿Necesito registrarme para participar?"
                        isOpen={openIndex === 1}
                        onToggle={() => handleToggle(1)}
                    >
                        <p>
                            ¡No es necesario un registro previo! Simplemente trae tus residuos a nuestro punto de acopio. Al registrar tu primer aporte en la sección "Contribución" de esta app, se te asignará un ID de usuario automáticamente para que puedas empezar a acumular tus EcoPuntos.
                        </p>
                    </AccordionItem>
                    <AccordionItem
                        title="¿Cómo se calculan los puntos?"
                        isOpen={openIndex === 2}
                        onToggle={() => handleToggle(2)}
                    >
                        <p>
                            Ganas <strong>{POINTS_PER_KG} EcoPuntos</strong> por cada kilogramo de residuo orgánico. Si tus residuos vienen bien clasificados (separados de plásticos y otros contaminantes), ¡te recompensamos con un <strong>bono del 50% extra</strong>!, obteniendo un total de <strong>{Math.round(POINTS_PER_KG * CLASSIFIED_MULTIPLIER)} EcoPuntos</strong> por kilogramo.
                        </p>
                    </AccordionItem>
                     <AccordionItem
                        title="¿Tienen fecha de vencimiento los EcoPuntos?"
                        isOpen={openIndex === 3}
                        onToggle={() => handleToggle(3)}
                    >
                        <p>
                            No, tus EcoPuntos no caducan. Son un reflejo de tu contribución continua a la comunidad y al medio ambiente. Puedes acumularlos y canjearlos cuando lo desees por los productos de nuestra biofábrica.
                        </p>
                    </AccordionItem>
                </div>
            </motion.div>

             <motion.div variants={sectionVariants} className="mt-16 pt-12 border-t border-gray-200">
                <div className="text-center mb-8">
                    <h3 className="text-3xl font-extrabold text-[#2a552e] mb-2">Nuestro Punto Físico de Acopio</h3>
                    <p className="text-lg text-gray-600">Encuéntranos en la <span className="font-bold">UNIDAD EDUCATIVA GENERAL ELOY ALFARO SALCEDO</span>.</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 max-w-5xl mx-auto">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12757.32767287611!2d-78.69554045000001!3d-0.9567530500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2sec!4v1761694965534!5m2!1ses!2sec" width="100%" height="400" className="border-0 rounded-xl" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </motion.div>
        </div>
    </motion.section>
);
};