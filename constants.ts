import { Product } from './types';
import React from 'react';
import { CompostIcon, BiolIcon, MicroorganismIcon } from './components/Icons';


export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Compost Premium',
    description: 'Abono orgánico de alta calidad obtenido de residuos orgánicos clasificados.',
    detailedDescription: 'Rico en nutrientes, mejora la estructura del suelo y aumenta la retención de agua. Ideal para todo tipo de plantas y huertos.',
    points: 100,
    unit: 'kg',
    icon: React.createElement(CompostIcon),
  },
  {
    id: 2,
    name: 'Biol Biofertilizante',
    description: 'Fertilizante líquido orgánico con alta carga microbiana del biodigestor.',
    detailedDescription: 'Potente estimulante líquido que fortalece las raíces y mejora la absorción de nutrientes. Contiene hormonas de crecimiento naturales.',
    points: 200,
    unit: 'litro',
    icon: React.createElement(BiolIcon),
  },
  {
    id: 3,
    name: 'Microorganismos',
    description: 'Mezcla de microorganismos de montaña beneficiosos para la salud del suelo.',
    detailedDescription: 'Actúan como un probiótico para tu suelo, descomponiendo materia orgánica y suprimiendo patógenos. La clave para un suelo vivo y fértil.',
    points: 150,
    unit: 'unidad',
    icon: React.createElement(MicroorganismIcon),
  },
];

export const POINTS_PER_KG = 10;
export const CLASSIFIED_MULTIPLIER = 1.5;
export const CO2_PER_KG = 0.6;