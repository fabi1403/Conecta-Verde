import React from 'react';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

export const StatCard: React.FC<{ value: number; label: string; unit: string; icon: React.ReactNode; color: string; }> = ({ value, label, unit, icon, color }) => {
    const animatedValue = useAnimatedCounter(value);
    return (
        <div className="flex flex-col items-center text-center">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${color}`}>
                {icon}
            </div>
            <h3 className="text-4xl font-extrabold text-[#2a552e]">
                {animatedValue.toLocaleString()} <span className="text-2xl font-bold text-gray-500">{unit}</span>
            </h3>
            <p className="text-gray-600 mt-1">{label}</p>
        </div>
    );
};
