
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import type { Page } from '../types';

const AnimatedCharacter: React.FC<{ char: string; index: number; centerIndex: number; scrollYProgress: any; }> = ({ char, index, centerIndex, scrollYProgress }) => {
    const isSpace = char === " ";

    const distanceFromCenter = index - centerIndex;

    const x = useTransform(
        scrollYProgress,
        [0, 0.5],
        [distanceFromCenter * 50, 0]
    );
    const rotateX = useTransform(
        scrollYProgress,
        [0, 0.5],
        [distanceFromCenter * 40 + 70, 0]
    );
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.2],
        [0, 1]
    );

    return (
        <motion.span
            className={`inline-block ${isSpace ? 'w-4 md:w-6' : ''}`}
            style={{
                x,
                rotateX,
                opacity,
                transformOrigin: "center center -30px",
            }}
        >
            {char}
        </motion.span>
    );
};

export const AnimatedHeroSection: React.FC<{navigateTo: (page: Page) => void}> = ({navigateTo}) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const text = "Transforma Residuos, Cultiva Comunidad.";
    const characters = text.split("");
    const centerIndex = Math.floor(characters.length / 2);
    const slogan = "Sembrando futuro, un residuo a la vez.";

    const controls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            while (true) {
                // Animate to visible state (typewriter effect)
                await controls.start("visible");
                // Wait for 3 seconds
                await new Promise(resolve => setTimeout(resolve, 3000));
                // Animate to hidden state
                await controls.start("hidden");
                // Wait for 1 second before restarting
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        };
        sequence();
    }, [controls]);

    const sentenceVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2,
                staggerChildren: 0.06, // Adjust typing speed here
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };
    
    const logoVariants = {
        hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                delay: slogan.length * 0.06 + 0.2, // Wait for slogan to finish
                duration: 0.8,
                ease: "easeOut" as const
            } 
        }
    };
    
    return (
        <div ref={targetRef} className="relative h-[200vh]">
            <div className="sticky top-0 flex flex-col items-center justify-center h-screen overflow-hidden">
                
                {/* Welcome Message - Fades out on scroll */}
                <motion.div
                    className="text-center absolute"
                    style={{
                        opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]),
                        y: useTransform(scrollYProgress, [0, 0.15], [0, -50]),
                        scale: useTransform(scrollYProgress, [0, 0.15], [1, 0.8]),
                    }}
                >
                    <h1 className="text-2xl md:text-3xl font-bold text-[#5a442a]">Bienvenido a</h1>
                    <h2 className="text-5xl md:text-7xl font-extrabold text-[#2a552e] mt-2">Conecta Verde</h2>
                     <motion.p
                        className="font-caveat text-4xl md:text-5xl text-center text-[#5a442a] font-bold mt-8 h-16"
                        variants={sentenceVariants}
                        initial="hidden"
                        animate={controls}
                    >
                       {slogan.split("").map((char, index) => (
                           <motion.span key={char + "-" + index} variants={letterVariants} className="inline-block">
                               {char === ' ' ? '\u00A0' : char}
                           </motion.span>
                       ))}
                    </motion.p>
                    <motion.img 
                        src="/UEGEA.png" 
                        alt="Logo U.E. General Eloy Alfaro" 
                        className="mx-auto mt-8 h-24" 
                        variants={logoVariants}
                        initial="hidden"
                        animate={controls}
                    />
                </motion.div>

                {/* Animated Title - Fades in on scroll */}
                <div
                    className="text-4xl md:text-6xl font-extrabold text-[#2a552e] text-center leading-tight p-4 max-w-4xl"
                    style={{ perspective: "1000px" }}
                >
                    {characters.map((char, index) => (
                      <AnimatedCharacter
                        key={index}
                        char={char}
                        index={index}
                        centerIndex={centerIndex}
                        scrollYProgress={scrollYProgress}
                      />
                    ))}
                </div>
                
                 <motion.div 
                    className="mt-8 px-4"
                    style={{
                        opacity: useTransform(scrollYProgress, [0.4, 0.6], [0, 1]),
                        y: useTransform(scrollYProgress, [0.4, 0.6], [20, 0])
                    }}
                 >
                    <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-600 text-center">
                        Únete a la red de compostaje comunitario de Salcedo. Registra tus residuos orgánicos, gana EcoPuntos y canjéalos por productos que nutren nuestra tierra.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button onClick={() => navigateTo('contribucion')} className="bg-[#2a552e] text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg transition duration-300 transform hover:scale-105 hover:bg-[#204023] active:scale-95">
                            Registrar Aporte
                        </button>
                        <button onClick={() => navigateTo('productos')} className="bg-transparent border-2 border-[#5a442a] hover:bg-[#5a442a] hover:text-white text-[#5a442a] px-8 py-3 rounded-xl font-medium text-lg transition duration-300 transform active:scale-95">
                            Ver Productos
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}