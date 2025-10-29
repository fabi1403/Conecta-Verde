
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { CartItem as CartItemType, User, Page } from '../types';
import { EmptyCartIcon, CheckCircleIcon } from '../components/Icons';
import { CartItem } from '../components/CartItem';

interface CartPageProps {
    cart: CartItemType[];
    user: User;
    onRedeem: () => boolean;
    navigateTo: (page: Page) => void;
    onUpdateQuantity: (productId: number, newQuantity: number) => void;
    onRemoveItem: (productId: number) => void;
}

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
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0, 0, 0.58, 1] as const
    }
  }
};

export const CartPage: React.FC<CartPageProps> = ({ cart, user, onRedeem, navigateTo, onUpdateQuantity, onRemoveItem }) => {
    const totalCost = cart.reduce((sum, item) => sum + item.points * item.quantity, 0);
    const canRedeem = user.totalPoints >= totalCost && totalCost > 0;
    
    const [showSuccess, setShowSuccess] = useState(false);
    const [redeemedCost, setRedeemedCost] = useState(0);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleRedeemClick = () => {
        if (!canRedeem) {
            setErrorMessage('No tienes suficientes puntos para este canje.');
            setTimeout(() => setErrorMessage(null), 3000);
            return;
        }
        const currentCost = totalCost;
        if (onRedeem()) {
            setRedeemedCost(currentCost);
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
            }, 3000);
        }
    };

    const renderContent = () => {
        if (showSuccess) {
            return (
                <motion.div
                    key="success-view"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0, 0, 0.58, 1] as const }}
                    className="text-center py-8 flex flex-col items-center"
                >
                    <CheckCircleIcon className="h-24 w-24 text-green-500" />
                    <h3 className="mt-4 text-2xl font-bold text-[#2a552e]">¡Canje Exitoso!</h3>
                    <p className="mt-2 text-lg text-gray-600">
                        Has utilizado <span className="font-bold text-[#5a442a]">{redeemedCost.toLocaleString()}</span> EcoPuntos.
                    </p>
                </motion.div>
            );
        }

        if (cart.length === 0) {
            return (
                <div className="text-center text-gray-500 py-8">
                    <EmptyCartIcon />
                    <p className="mt-4 text-lg">Tu carrito está vacío.</p>
                    <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('productos')}} className="mt-4 inline-block text-[#2a552e] font-bold hover:underline">¡Ve a canjear productos!</a>
                </div>
            );
        }

        return (
            <>
                <div className="space-y-4">
                {cart.map(item => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)" }}
                        whileTap={{ scale: 0.98 }}
                        className="relative"
                    >
                        <CartItem 
                            item={item} 
                            onUpdateQuantity={onUpdateQuantity}
                            onRemoveItem={onRemoveItem}
                        />
                    </motion.div>
                ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex justify-between items-center text-xl font-bold mb-2">
                        <span className="text-gray-700">Total a Canjear:</span>
                        <span className="text-[#2a552e]">{totalCost.toLocaleString()} puntos</span>
                    </div>
                    <div className="flex justify-between items-center text-lg text-gray-600">
                        <span>Puntos Disponibles:</span>
                        <span className="font-bold">{user.totalPoints.toLocaleString()}</span>
                    </div>
                     {user.totalPoints < totalCost && (
                        <p className="text-right text-red-500 font-semibold mt-1">
                            Te faltan {(totalCost - user.totalPoints).toLocaleString()} puntos
                        </p>
                    )}
                    <motion.button 
                        onClick={handleRedeemClick} 
                        disabled={!canRedeem} 
                        className={`w-full mt-6 bg-[#2a552e] text-white py-4 rounded-xl font-bold text-xl shadow-lg transition duration-300 transform ${!canRedeem ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#204023]'}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Confirmar Canje
                    </motion.button>
                     {errorMessage && <div className="mt-4 p-3 rounded-lg text-center font-semibold bg-red-100 text-red-800">{errorMessage}</div>}
                </div>
            </>
        );
    };
    
    return (
        <section className="py-20 min-h-[calc(100vh-200px)]">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="max-w-3xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-[#2a552e] mb-8 text-center">Mi Carrito de Canje</motion.h2>
                    <motion.div variants={itemVariants} className="bg-white p-6 md:p-8 rounded-2xl shadow-xl min-h-[300px]">
                        {renderContent()}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};