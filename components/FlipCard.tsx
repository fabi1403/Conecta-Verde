
import React, { useState } from 'react';
import type { Product } from '../types';

export const FlipCard: React.FC<{product: Product, onAddToCart: (product: Product) => void}> = ({ product, onAddToCart }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };
    
    const handleAddToCartClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // Evita que el clic en el botón active el giro de la tarjeta
        onAddToCart(product);
    };

    return (
    <div className="h-96 [perspective:1000px] cursor-pointer" onClick={handleFlip}>
        <div className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
            {/* Front Face */}
            <div className="absolute w-full h-full rounded-2xl shadow-lg bg-white flex flex-col justify-between items-center text-center p-8 border border-gray-100 [backface-visibility:hidden]">
                {product.icon}
                <h3 className="text-2xl font-bold text-[#5a442a] mt-4">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-2 flex-grow">{product.description}</p>
                <p className="text-[#2a552e] font-extrabold text-2xl mt-4">{product.points} puntos / {product.unit}</p>
                <div className="text-gray-400 text-xs mt-4 font-semibold">Haz Clic para Canjear</div>
            </div>
            
            {/* Back Face */}
            <div className="absolute w-full h-full rounded-2xl shadow-lg bg-[#2a552e] text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center text-center p-6">
                 <div className="flex-grow flex flex-col justify-center">
                    {/* Fix: Add specific props type to the React.ReactElement assertion for React.cloneElement to correctly type-check the passed props. */}
                    {React.cloneElement(product.icon as React.ReactElement<{ className?: string }>, { className: "h-20 w-20 mx-auto text-white/90" })}
                    <h4 className="text-2xl font-bold mt-4 mb-2">{product.name}</h4>
                    <p className="text-sm text-green-200 max-w-xs px-2">
                        {product.detailedDescription}
                    </p>
                </div>
                <div className="w-full mt-4">
                    <button onClick={handleAddToCartClick} className="w-full bg-white text-[#2a552e] font-bold py-3 px-6 rounded-xl shadow-lg transition transform hover:scale-105 active:scale-95">
                        Añadir al Carrito
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
};
