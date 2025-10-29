
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import type { CartItem as CartItemType } from '../types';
import { PlusIcon, MinusIcon, TrashIcon } from './Icons';

interface CartItemProps {
    item: CartItemType;
    onUpdateQuantity: (productId: number, newQuantity: number) => void;
    onRemoveItem: (productId: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemoveItem }) => {
    const controls = useAnimation();
    const isInitialMount = useRef(true);

    useEffect(() => {
        // Skip animation on the initial render.
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }

        // Animate the quantity change.
        controls.start({
            scale: [1, 1.4, 1], // Keyframes: normal -> large -> normal
            transition: { duration: 0.3, times: [0, 0.5, 1] }
        });
    }, [item.quantity, controls]);
    
    return (
        <div className="flex items-center justify-between py-4 border-b border-gray-100 last:border-b-0">
            <div className="flex items-center">
                 <div className="mr-4 text-gray-500">
                    {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: "h-12 w-12" })}
                </div>
                <div>
                    <p className="font-bold text-lg text-[#5a442a]">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.points.toLocaleString()} puntos / {item.unit}</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-200 rounded-lg">
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-l-lg transition">
                        <MinusIcon className="h-4 w-4" />
                    </button>
                    <motion.span 
                        animate={controls}
                        className="px-3 font-semibold text-lg text-[#2a552e] inline-block"
                    >
                        {item.quantity}
                    </motion.span>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-r-lg transition">
                        <PlusIcon className="h-4 w-4" />
                    </button>
                </div>
                <button onClick={() => onRemoveItem(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition" aria-label={`Eliminar ${item.name}`}>
                    <TrashIcon className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
};
