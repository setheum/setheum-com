"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface BentoItemProps {
    title: string;
    subtitle: string;
    copy: string;
    color: string;
    image?: string;
    metric?: string;
    className?: string;
}

const BentoItem = ({ title, subtitle, copy, color, image, metric, className }: BentoItemProps) => {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className={`relative p-8 rounded-[32px] bg-white dark:bg-seed-dark-charcoal/50 border border-seed-mid-grey/10 group cursor-pointer overflow-hidden flex flex-col justify-between ${className}`}
        >
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: color }}
                    />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-seed-mid-grey font-medium">{subtitle}</span>
                </div>
                <h3 className="text-3xl font-bold tracking-tight mb-3 text-seed-dark-charcoal dark:text-white">{title}</h3>
                <p className="text-sm text-seed-mid-grey leading-relaxed max-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {copy}
                </p>
            </div>

            {image && (
                <div className="absolute right-[-20%] bottom-[-10%] w-[80%] aspect-square pointer-events-none group-hover:scale-110 group-hover:-translate-y-4 transition-transform duration-700 ease-[0.23, 1, 0.32, 1]">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                </div>
            )}

            <div className="relative z-10 flex items-center justify-between mt-8">
                {metric ? (
                    <div className="px-3 py-1 bg-seed-light-grey dark:bg-seed-deep-black rounded-full border border-seed-mid-grey/5">
                        <span className="text-[10px] font-mono text-seed-dark-charcoal dark:text-white uppercase tracking-tighter">{metric}</span>
                    </div>
                ) : <div />}

                <div className="w-8 h-8 rounded-full bg-seed-light-grey dark:bg-seed-deep-black border border-seed-mid-grey/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 11L11 1.00001M11 1.00001H1M11 1.00001V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            {/* Glassmorphism Background Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 100% 100%, ${color} 0%, transparent 60%)`,
                        filter: 'blur(60px)'
                    }}
                />
            </div>
        </motion.div>
    );
};

export default function BentoGrid() {
    const products = [
        {
            title: "Seed 1.8",
            subtitle: "Agent Foundation Model",
            copy: "The most capable model for autonomous reasoning and tool orchestration.",
            color: "var(--product-ceaph)",
            image: "/seed-1-8.png",
            metric: "94.2% MATH",
            size: "lg:col-span-2 lg:row-span-2"
        },
        {
            title: "Seed 1.6",
            subtitle: "Multimodal Vision",
            copy: "Real-time visual understanding with pixel-perfect precision.",
            color: "var(--product-setheum)",
            image: "/seed-1-6.png",
            metric: "Active Beta",
            size: "col-span-1 row-span-1"
        },
        {
            title: "Seed 1.5",
            subtitle: "Hardware Optimized",
            copy: "Extreme efficiency for edge devices and decentralized compute.",
            color: "var(--product-alif)",
            image: "/seed-1-5.png",
            metric: "Llama Equivalent",
            size: "col-span-1 row-span-1"
        },
        {
            title: "Setheum",
            subtitle: "Decentralized Compute",
            copy: "Powering the global AI economy with peer-to-peer GPU clusters.",
            color: "var(--product-setheum)",
            metric: "2.1M GFLOPS",
            size: "col-span-1 lg:row-span-1"
        },
        {
            title: "Buidl",
            subtitle: "Code Intelligence",
            copy: "Universal logic for next-gen software development.",
            color: "var(--product-buidl)",
            metric: "Next-gen IDE",
            size: "col-span-1 lg:row-span-1"
        }
    ];

    return (
        <section className="py-xxl px-large bg-seed-light-grey/30 dark:bg-seed-deep-black">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-xl">
                    <div>
                        <h2 className="text-5xl font-bold tracking-tight mb-4 text-seed-dark-charcoal dark:text-white italic">The Seed Ecosystem</h2>
                        <p className="text-seed-mid-grey text-lg max-w-xl">
                            Architecture for the intelligence era. Modular, decentralized, and hyper-optimized.
                        </p>
                    </div>
                    <div className="flex gap-4 mt-8 md:mt-0">
                        <div className="w-10 h-10 rounded-full border border-seed-mid-grey/20 flex items-center justify-center cursor-pointer hover:bg-white dark:hover:bg-seed-dark-charcoal transition-colors">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-seed-mid-grey/20 flex items-center justify-center cursor-pointer hover:bg-white dark:hover:bg-seed-dark-charcoal transition-colors">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-medium auto-rows-[340px]">
                    {products.map((p, i) => (
                        <BentoItem key={i} {...p} className={p.size} />
                    ))}

                    {/* Research Feed Placeholder */}
                    <div className="col-span-1 lg:col-span-1 row-span-1 p-8 rounded-[32px] bg-white/50 dark:bg-seed-dark-charcoal/30 border border-seed-mid-grey/10 border-dashed flex flex-col items-center justify-center gap-4 group cursor-pointer hover:bg-white transition-colors duration-500">
                        <div className="w-12 h-12 rounded-2xl bg-seed-light-grey dark:bg-seed-deep-black flex items-center justify-center group-hover:rotate-12 transition-transform">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M4 19.5V5C4 3.89543 4.89543 3 6 3H19.4C19.7314 3 20 3.26863 20 3.6V21H6C4.89543 21 4 20.1046 4 19.5Z" />
                                <path d="M20 21L15 21" />
                                <path d="M6 18H20" />
                            </svg>
                        </div>
                        <span className="text-seed-mid-grey text-sm font-medium">Selected Research Papers</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
