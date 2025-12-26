"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { VisualizerCanvas } from "./Visualizer";

const ParticleBackground = () => {
    const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number }[]>([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-seed-mid-grey"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

export default function Hero() {
    return (
        <section className="relative h-[100vh] flex flex-col items-center justify-center px-large overflow-hidden bg-white dark:bg-seed-deep-black">
            {/* 3D Visualizer Background */}
            <div className="absolute inset-0 z-0 opacity-40 dark:opacity-60">
                <VisualizerCanvas />
            </div>

            <ParticleBackground />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                className="relative z-10 text-center max-w-4xl pointer-events-none"
            >
                <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="w-12 h-12 mb-8 mx-auto flex items-center justify-center cursor-pointer pointer-events-auto"
                >
                    <Image src="/setheum.png" alt="Setheum Logo" width={48} height={48} className="rounded-lg" />
                </motion.div>

                <h1 className="text-7xl font-bold tracking-tighter leading-[1.05] text-seed-dark-charcoal dark:text-white mb-6">
                    Democratizing Compute<br />
                    <span className="text-seed-mid-grey">For The Intelligence Era</span>
                </h1>

                <p className="text-lg text-seed-mid-grey max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                    A rust-first base for the intelligence era. Providing high-performance AI infrastructure on the Blockchain.
                </p>
                {/* 
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <button className="px-8 py-4 bg-seed-dark-charcoal dark:bg-white text-white dark:text-seed-dark-charcoal font-medium rounded-full hover:opacity-90 transition-opacity">
                        Explore Ecosystem
                    </button>
                    <button className="px-8 py-4 bg-transparent border border-seed-mid-grey/20 text-seed-dark-charcoal dark:text-white font-medium rounded-full hover:bg-seed-light-grey dark:hover:bg-seed-dark-charcoal/50 transition-colors">
                        View Live Network
                    </button>
                </div>
                 */}
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
                <span className="text-xs uppercase tracking-widest text-seed-mid-grey mb-2">Scroll to discover</span>
                <div className="w-px h-12 bg-gradient-to-b from-seed-mid-grey to-transparent" />
            </motion.div>
        </section>
    );
}
