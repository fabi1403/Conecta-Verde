import React from 'react';
import { motion } from 'framer-motion';
import type { Page, Stats } from '../types';
import { AnimatedHeroSection } from '../components/AnimatedHero';
import { StatCard } from '../components/StatCard';
import { Step1Icon, Step2Icon, Step3Icon, WeightIcon, LeafIcon, UserGroupIcon } from '../components/Icons';

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
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

export const HomePage: React.FC<{stats: Stats, navigateTo: (page: Page) => void}> = ({stats, navigateTo}) => (
    <div>
        <AnimatedHeroSection navigateTo={navigateTo} />
        
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {/* How it Works Section */}
            <motion.section variants={sectionVariants} className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2a552e] mb-2">Un Círculo Virtuoso en 3 Pasos</h2>
                        <p className="text-lg text-gray-600">Así de fácil es ser parte del cambio.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                        <motion.div variants={sectionVariants} className="flex flex-col items-center p-6">
                            <Step1Icon />
                            <span className="text-sm font-bold text-[#c7a97f]">PASO 1</span>
                            <h3 className="text-2xl font-bold text-[#5a442a] my-2">Registra</h3>
                            <p className="text-gray-600">Aporta tus residuos orgánicos en nuestro punto de acopio y regístralos en la plataforma para empezar a sumar.</p>
                        </motion.div>
                        <motion.div variants={sectionVariants} className="flex flex-col items-center p-6">
                            <Step2Icon />
                            <span className="text-sm font-bold text-[#8db246]">PASO 2</span>
                            <h3 className="text-2xl font-bold text-[#5a442a] my-2">Acumula</h3>
                            <p className="text-gray-600">Cada kilogramo cuenta. Gana EcoPuntos por tus aportes y obtén bonificaciones por separar correctamente tus residuos.</p>
                        </motion.div>
                        <motion.div variants={sectionVariants} className="flex flex-col items-center p-6">
                            <Step3Icon />
                            <span className="text-sm font-bold text-[#7ea09b]">PASO 3</span>
                            <h3 className="text-2xl font-bold text-[#5a442a] my-2">Canjea</h3>
                            <p className="text-gray-600">Usa tus EcoPuntos para adquirir compost, biol y otros productos de nuestra biofábrica local. ¡El fruto de tu esfuerzo!</p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Impact Section */}
            <motion.section variants={sectionVariants} className="py-20">
                 <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2a552e] mb-2">Nuestro Impacto Colectivo</h2>
                        <p className="text-lg text-gray-600">Cada aporte suma a un Salcedo más verde.</p>
                    </div>
                    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex flex-col items-center p-6 rounded-lg shadow-md bg-white">
                                <StatCard value={stats.totalWeight} label="Residuos recuperados" unit="kg" icon={<WeightIcon/>} color="bg-[#c7a97f]" />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex flex-col items-center p-6 rounded-lg shadow-md bg-white">
                                <StatCard value={stats.co2Saved} label="Emisiones evitadas" unit="kg CO₂" icon={<LeafIcon/>} color="bg-[#8db246]"/>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex flex-col items-center p-6 rounded-lg shadow-md bg-white">
                                <StatCard value={stats.totalUsers} label="Guardianes del Suelo" unit="" icon={<UserGroupIcon/>} color="bg-[#7ea09b]"/>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </motion.div>
    </div>
);