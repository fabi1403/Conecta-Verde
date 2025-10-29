
import type { ReactNode } from 'react';

export type Page = 'inicio' | 'funcionamiento' | 'productos' | 'contribucion' | 'carrito';

export interface Product {
  id: number;
  name: string;
  description: string;
  detailedDescription: string;
  points: number;
  unit: string;
  // Fix: Use ReactNode type.
  icon: ReactNode;
}

export interface User {
  id: string;
  totalPoints: number;
  totalWeight: number;
  level: string;
}

export interface Stats {
  totalWeight: number;
  totalUsers: number;
  co2Saved: number;
}

export interface CartItem extends Product {
  quantity: number;
}