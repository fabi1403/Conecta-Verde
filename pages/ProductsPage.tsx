
import React from 'react';
import { motion } from 'framer-motion';
import type { Product, Page } from '../types';
import { PRODUCTS } from '../constants';
import { FlipCard } from '../components/FlipCard';

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      // Fix: Replaced "easeOut" string with its cubic-bezier array equivalent to resolve TypeScript type error.
      // FIX: Added 'as const' to correctly type the cubic-bezier array for framer-motion.
      ease: [0, 0, 0.58, 1] as const
    }
  }
};

export const ProductsPage: React.FC<{ onAddToCart: (product: Product) => void; navigateTo: (page: Page) => void }> = ({ onAddToCart, navigateTo }) => {
    
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                 <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    // Fix: Replaced "easeOut" string with its cubic-bezier array equivalent to resolve TypeScript type error.
                    // FIX: Added 'as const' to correctly type the cubic-bezier array for framer-motion.
                    transition={{ duration: 0.6, ease: [0, 0, 0.58, 1] as const }}
                 >
                    <h2 className="text-4xl font-extrabold text-[#2a552e] mb-4">Canjea tus Cosechas Verdes</h2>
                    <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">Usa tus EcoPuntos para obtener productos de nuestra Biofábrica, creados a partir del esfuerzo de la comunidad.</p>
                </motion.div>
                <motion.div 
                    className="max-w-md mx-auto md:max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {PRODUCTS.map(product => (
                        <motion.div key={product.id} variants={itemVariants} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                            <FlipCard product={product} onAddToCart={onAddToCart} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};