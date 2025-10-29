import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { User } from '../types';
import { POINTS_PER_KG, CLASSIFIED_MULTIPLIER } from '../constants';
import { PlusCircleIcon } from '../components/Icons';

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

export const ContribucionPage: React.FC<{user: User, onRegister: (weight: number, isClassified: boolean) => void}> = ({ user, onRegister }) => {
    const [weight, setWeight] = useState('');
    const [wasteType, setWasteType] = useState('Restos Vegetales');
    const [isClassified, setIsClassified] = useState(false);
    const [estimatedPoints, setEstimatedPoints] = useState(0);
    const [message, setMessage] = useState<{text: string, type: 'success' | 'error'} | null>(null);

    useEffect(() => {
        const weightNum = parseFloat(weight) || 0;
        const basePoints = weightNum * POINTS_PER_KG;
        const finalPoints = isClassified ? Math.round(basePoints * CLASSIFIED_MULTIPLIER) : Math.round(basePoints);
        setEstimatedPoints(finalPoints);
    }, [weight, isClassified]);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const weightNum = parseFloat(weight);
        if (!weightNum || weightNum <= 0) {
            setMessage({text: 'El peso debe ser un número mayor a 0.', type: 'error'});
            return;
        }
        onRegister(weightNum, isClassified);
        setMessage({text: `¡Éxito! Has ganado ${estimatedPoints} EcoPuntos.`, type: 'success'});
        setWeight('');
        setIsClassified(false);
        setTimeout(() => setMessage(null), 3000);
    };

    return (
        <motion.section 
            className="py-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="container mx-auto px-4">
                <motion.div variants={sectionVariants} className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl">
                    <h2 className="text-3xl font-bold text-[#2a552e] mb-2 text-center">Registrar mi Contribución de Residuos</h2>
                    <p className="text-center text-gray-600 mb-8">Cada aporte cuenta. Completa el formulario para sumar EcoPuntos.</p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="weight" className="block text-lg font-semibold text-[#5a442a] mb-2">Peso (kg)</label>
                            <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} min="0.1" step="0.1" className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#8db246] focus:border-[#8db246] text-lg" placeholder="Ej: 5.5" required />
                        </div>
                        
                        <div>
                             <label className="block text-lg font-semibold text-[#5a442a] mb-3">Tipo de Residuo</label>
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {['Restos Vegetales', 'Frutas y Cáscaras', 'Estiércol', 'Otros Orgánicos'].map(type => (
                                    <motion.label 
                                        key={type} 
                                        htmlFor={type} 
                                        className="flex items-center p-4 border border-gray-300 rounded-xl cursor-pointer has-[:checked]:bg-[#e8f5e9] has-[:checked]:border-[#2a552e] has-[:checked]:ring-2 has-[:checked]:ring-[#8db246]/50 transition-all duration-200"
                                        whileHover={{ scale: 1.03, boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)" }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        <input
                                            type="radio"
                                            id={type}
                                            name="wasteType"
                                            value={type}
                                            checked={wasteType === type}
                                            onChange={(e) => setWasteType(e.target.value)}
                                            className="h-5 w-5 text-[#2a552e] focus:ring-[#2a552e] border-gray-400"
                                        />
                                        <span className="ml-3 text-gray-700 font-medium">{type}</span>
                                    </motion.label>
                                ))}
                            </div>
                        </div>

                        <motion.div 
                            className="flex items-center p-4 bg-yellow-50 border border-yellow-200 rounded-xl"
                            whileHover={{ scale: 1.02, boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)" }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <input type="checkbox" id="classified" checked={isClassified} onChange={(e) => setIsClassified(e.target.checked)} className="h-5 w-5 text-[#2a552e] rounded-md border-gray-300 focus:ring-[#2a552e]" />
                            <label htmlFor="classified" className="ml-3 text-[#5a442a] text-lg">¿Residuos clasificados? <span className="font-bold text-[#2a552e]">(¡Gana +50% Puntos!)</span></label>
                        </motion.div>
                        <div className="text-center bg-gray-50 p-4 rounded-xl">
                            Puntos estimados: <span className="text-xl font-extrabold text-[#2a552e]">{estimatedPoints}</span>
                        </div>
                        <motion.button 
                            type="submit" 
                            className="w-full flex items-center justify-center bg-[#2a552e] text-white py-4 rounded-xl font-bold text-xl shadow-lg transition duration-300 transform hover:scale-[1.02] hover:bg-[#204023] active:scale-100"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <PlusCircleIcon />
                            <span className="ml-2">Añadir Contribución</span>
                        </motion.button>
                        {message && <div className={`mt-4 p-3 rounded-lg text-center font-semibold ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{message.text}</div>}
                    </form>
                </motion.div>

                <motion.div variants={sectionVariants} className="max-w-2xl mx-auto mt-16">
                    <div className="bg-white rounded-2xl p-8 shadow-xl">
                         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                             <h3 className="text-xl font-bold text-[#5a442a] mb-2 sm:mb-0">Mi Perfil</h3>
                             <div className="bg-[#f5f1e8] text-[#5a442a] text-sm font-bold px-3 py-1 rounded-full">{user.level}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                                <p className="text-gray-500 text-sm">EcoPuntos Totales</p>
                                <p className="text-4xl font-extrabold text-[#2a552e]">{user.totalPoints.toLocaleString()}</p>
                            </div>
                             <div>
                                <p className="text-gray-500 text-sm">Peso Total Aportado</p>
                                <p className="text-4xl font-extrabold text-[#5a442a]">{user.totalWeight.toFixed(1)} <span className="text-2xl text-gray-500">kg</span></p>
                            </div>
                        </div>
                        <div className="text-center mt-4 text-xs text-gray-400 font-mono break-all">ID: {user.id}</div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};