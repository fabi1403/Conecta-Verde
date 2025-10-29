
import React, { useState } from 'react';
import ReactLenis from 'lenis/react';

import type { Page, User, Stats, Product, CartItem } from './types';
import { POINTS_PER_KG, CLASSIFIED_MULTIPLIER, CO2_PER_KG } from './constants';

// Import Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Import Pages
import { HomePage } from './pages/HomePage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ProductsPage } from './pages/ProductsPage';
import { ContribucionPage } from './pages/ContribucionPage';
import { CartPage } from './pages/CartPage';

export default function App() {
    const [activePage, setActivePage] = useState<Page>('inicio');
    const [user, setUser] = useState<User>({ id: 'sim-user-' + Math.random().toString(36).substr(2, 9), totalPoints: 550, totalWeight: 45.5, level: 'Guardián del Suelo 🌱' });
    const [stats, setStats] = useState<Stats>({ totalWeight: 10250, totalUsers: 580, co2Saved: 6150 });
    const [cart, setCart] = useState<CartItem[]>([]);

    const determineUserLevel = (points: number) => {
        if (points >= 1000) return 'Maestro Compostador 🌳';
        if (points >= 500) return 'Experto en Suelos 🌻';
        if (points >= 100) return 'Guardián del Suelo 🌱';
        return 'Novato de la Tierra 🌰';
    }

    const navigateTo = (page: Page) => {
        setActivePage(page);
        window.scrollTo(0, 0);
    };

    const handleRegisterWaste = (weight: number, isClassified: boolean) => {
        const basePoints = weight * POINTS_PER_KG;
        const pointsEarned = isClassified ? Math.round(basePoints * CLASSIFIED_MULTIPLIER) : Math.round(basePoints);
        
        setUser(prevUser => {
            const newTotalPoints = prevUser.totalPoints + pointsEarned;
            const newTotalWeight = prevUser.totalWeight + weight;
            return {
                ...prevUser,
                totalPoints: newTotalPoints,
                totalWeight: newTotalWeight,
                level: determineUserLevel(newTotalPoints),
            };
        });
        
        setStats(prevStats => ({
            ...prevStats,
            totalWeight: prevStats.totalWeight + weight,
            co2Saved: prevStats.co2Saved + Math.round(weight * CO2_PER_KG),
        }));
    };

    const handleAddToCart = (product: Product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item);
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const handleUpdateCartQuantity = (productId: number, newQuantity: number) => {
        setCart(prevCart => {
            if (newQuantity <= 0) {
                return prevCart.filter(item => item.id !== productId);
            }
            return prevCart.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            );
        });
    };
    
    const handleRemoveFromCart = (productId: number) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };


    const handleRedeem = () => {
        const totalCost = cart.reduce((sum, item) => sum + item.points * item.quantity, 0);
        if (user.totalPoints >= totalCost) {
            setUser(prevUser => {
                 const newTotalPoints = prevUser.totalPoints - totalCost;
                 return {
                    ...prevUser,
                    totalPoints: newTotalPoints,
                    level: determineUserLevel(newTotalPoints),
                 }
            });
            setCart([]);
            return true; // Indicate success
        }
        return false; // Indicate failure
    };

    const renderPage = () => {
        switch (activePage) {
            case 'inicio':
                return <HomePage stats={stats} navigateTo={navigateTo} />;
            case 'funcionamiento':
                return <HowItWorksPage navigateTo={navigateTo}/>;
            case 'productos':
                return <ProductsPage onAddToCart={handleAddToCart} navigateTo={navigateTo} />;
            case 'contribucion':
                return <ContribucionPage user={user} onRegister={handleRegisterWaste} />;
            case 'carrito':
                return <CartPage cart={cart} user={user} onRedeem={handleRedeem} navigateTo={navigateTo} onUpdateQuantity={handleUpdateCartQuantity} onRemoveItem={handleRemoveFromCart} />;
            default:
                return <HomePage stats={stats} navigateTo={navigateTo} />;
        }
    };

    return (
        <ReactLenis root>
            <div className="min-h-screen w-full relative">
                 <div
                    className="fixed inset-0 z-0"
                    style={{
                      backgroundImage: `radial-gradient(circle 500px at 50% 100px, rgba(249,115,22,0.15), transparent)`,
                    }}
                  />
                <div className="relative z-10 flex flex-col min-h-screen">
                    <Header navigateTo={navigateTo} cartItemCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
                    <main className="flex-grow">
                        {renderPage()}
                    </main>
                    <Footer navigateTo={navigateTo} />
                </div>
            </div>
        </ReactLenis>
    );
}